// app/admin/page.tsx
import { PrismaClient } from "@prisma/client";
import DateRangePicker from '@/app/admin/DateRangePicker';
import DownloadButton from '@/app/admin/DownloadButton';
import RegistrationTable from '@/app/admin/RegistrationTable';

const prisma = new PrismaClient();

export default async function AdminPage() {
  const registrations = await prisma.contactForm.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-3xl font-bold">Admin Dashboard - All Registrations</h1>
      <div className="mb-4">
        <div className="pb-8">
          <DateRangePicker />
        </div>
        <DownloadButton registrations={registrations} />
      </div>
      <RegistrationTable registrations={registrations} />
    </div>
  );
}
