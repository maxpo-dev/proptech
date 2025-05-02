import SmartVizX from '@/app/components/SmartVizX';
import Moderlab from '@/app/components/Moderlab';

export default function Exhibitors2025() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-950 mb-8">Exhibitors 2025</h1>

        <p className="text-lg text-gray-700 mb-12">
          Discover the leading exhibitors at the Future PropTech Summit. 
          Explore innovations in Virtual Reality, Real Estate Tech, and more!
        </p>

        <section className="p-4">
          <SmartVizX />
        </section>

        <section className="p-4">
          <Moderlab />
        </section>
      </div>
    </main>
  );
}
