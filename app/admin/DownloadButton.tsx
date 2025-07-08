'use client';

import { useState } from 'react';
import ExcelJS from 'exceljs';

interface Registration {
  id: string;
  name: string;
  jobTitle: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
  createdAt: Date;
}

interface DownloadButtonProps {
  registrations: Registration[];
}

export default function DownloadButton({ registrations }: DownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExcel = async () => {
    setIsGenerating(true);

    // Retrieve the start and end date inputs
    const startDateInput = document.querySelector('input[type="datetime-local"]:first-of-type') as HTMLInputElement;
    const endDateInput = document.querySelector('input[type="datetime-local"]:last-of-type') as HTMLInputElement;

    // Parse dates from the input values
    const startDate = startDateInput?.value ? new Date(startDateInput.value) : null;
    const endDate = endDateInput?.value ? new Date(endDateInput.value) : null;

    // Filter registrations by date range
    const filteredRegistrations = registrations.filter((registration) => {
      const registrationDate = new Date(registration.createdAt);
      if (startDate && endDate) {
        return registrationDate >= startDate && registrationDate <= endDate;
      } else if (startDate) {
        return registrationDate >= startDate;
      } else if (endDate) {
        return registrationDate <= endDate;
      }
      return true;
    });

    // Create workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Registrations');

    // Define worksheet columns
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Job Title', key: 'jobTitle', width: 20 },
      { header: 'Company Name', key: 'companyName', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Phone', key: 'phone', width: 20 },
      { header: 'Country', key: 'country', width: 20 },
      { header: 'Message', key: 'message', width: 40 },
      { header: 'Registration Date', key: 'createdAt', width: 30 },
    ];

    // Add rows to the worksheet
    filteredRegistrations.forEach((registration) => {
      worksheet.addRow({
        ...registration,
        createdAt: new Date(registration.createdAt).toLocaleString(),
      });
    });

    // Generate and download Excel file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `registrations_${startDate?.toISOString().split('T')[0] || 'all'}_to_${endDate?.toISOString().split('T')[0] || 'all'}.xlsx`;
    link.click();
    URL.revokeObjectURL(url);

    setIsGenerating(false);
  };

  return (
    <button
      onClick={generateExcel}
      disabled={isGenerating}
      className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
    >
      {isGenerating ? 'Generating...' : 'Download Excel'}
    </button>
  );
}
