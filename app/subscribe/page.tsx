import { Suspense } from 'react';
import prisma from '@/lib/prismaClient';
import DateRangePicker from '@/app/subscribe/DateRangePicker';
import DownloadButton from '@/app/subscribe/DownloadButton';
import ExhibitorTable from '@/app/subscribe/ExhibitorTable';

async function fetchExhibitors() {
  'use server'
  return await prisma.subscription.findMany({
    orderBy: { createdAt: 'desc' },
  });
}

export default async function AdminPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - All Exhibitors</h1>
      <div className="mb-4">
        <div className="pb-8">
          <DateRangePicker />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ExhibitorData />
        </Suspense>
      </div>
    </div>
  );
}

async function ExhibitorData() {
  const exhibitors = await fetchExhibitors();
  
  return (
    <>
      <DownloadButton exhibitors={exhibitors} />
      <ExhibitorTable exhibitors={exhibitors} />
    </>
  );
}