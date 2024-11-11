'use client';

import { useState } from 'react';
import ExcelJS from 'exceljs';

interface Subscription {
  id: string;
  email: string;
  createdAt: Date;
}

interface DownloadButtonProps {
  exhibitors: Subscription[];
}

export default function DownloadButton({ exhibitors }: DownloadButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const generateExcel = async () => {
    setIsGenerating(true);

    // Get start and end dates from input fields
    const startDateInput = document.querySelector('input[type="datetime-local"]:first-of-type') as HTMLInputElement;
    const endDateInput = document.querySelector('input[type="datetime-local"]:last-of-type') as HTMLInputElement;

    const startDate = startDateInput?.value ? new Date(startDateInput.value) : null;
    const endDate = endDateInput?.value ? new Date(endDateInput.value) : null;

    // Filter exhibitors based on date range
    const filteredExhibitors = exhibitors.filter((exhibitor) => {
      const registrationDate = new Date(exhibitor.createdAt);
      if (startDate && endDate) {
        return registrationDate >= startDate && registrationDate <= endDate;
      } else if (startDate) {
        return registrationDate >= startDate;
      } else if (endDate) {
        return registrationDate <= endDate;
      }
      return true;
    });

    // Create a new Excel workbook and worksheet
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Subscriptions');

    // Define worksheet columns based on schema
    worksheet.columns = [
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Registration Date', key: 'createdAt', width: 30 },
    ];

    // Add rows to worksheet
    filteredExhibitors.forEach((exhibitor) => {
      worksheet.addRow({
        email: exhibitor.email,
        createdAt: new Date(exhibitor.createdAt).toLocaleString(),
      });
    });

    // Generate and download the Excel file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `subscriptions_${startDate?.toISOString().split('T')[0] || 'all'}_to_${endDate?.toISOString().split('T')[0] || 'all'}.xlsx`;
    link.click();
    URL.revokeObjectURL(url);

    setIsGenerating(false);
  };

  return (
    <button
      onClick={generateExcel}
      disabled={isGenerating}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      {isGenerating ? 'Generating...' : 'Download Subscriptions Excel'}
    </button>
  );
}
