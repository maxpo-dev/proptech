
import Link from 'next/link';
import { ExhibitorsData } from '@/components/exhibitors/exhibitorsData';
import ExhibitorCard from '@/components/exhibitors/exhibitorCard';

export default function Exhibitors2025() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 pb-10 pt-20">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-8 text-4xl font-bold text-blue-950">Exhibitors 2025</h1>

        {/* Add Enquiry Button */}
        <div className="mb-8">
          <Link href="/register" passHref>
            <button className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition duration-200 hover:bg-blue-700">
              Enquire Now
            </button>
          </Link>
        </div>

        {ExhibitorsData.map((exhibitor, index) => (
          <section key={index} className="p-4">
            <ExhibitorCard key={index} {...exhibitor} />
          </section>
        ))

        }
      </div>
    </main>
  );
}
