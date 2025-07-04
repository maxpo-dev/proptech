import Moderlab from '@/app/components/Moderlab';
import Link from 'next/link';
import Shuttrd from '@/app/components/Shuttrd';
import Accolade from '@/app/components/Accolade';

export default function Exhibitors2025() {
  return (
    <main className="min-h-screen bg-gray-50 pt-40 pb-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">Exhibitors 2025</h1>

        {/* Add Enquiry Button */}
        <div className="mb-8">
          <Link href="/register" passHref>
            <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition duration-200">
              Enquire Now
            </button>
          </Link>
        </div>

                <section className="p-4">
          <Shuttrd />
        </section>


        <section className="p-4">
          <Moderlab />
        </section>

                <section className="p-4">
          <Accolade />
        </section>
      </div>
    </main>
  );
}
