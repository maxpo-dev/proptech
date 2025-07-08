import Image from 'next/image';
import Confimg from '@/app/images/1x.jpg'

const themes = [
  "Sustainability and Green Initiatives",
  "Policies and Regulation in Real Estate",
  "Investment Strategies and Opportunities",
  "Proptech Innovation and Digital Transformation",
  "Startup ScaleUp Pitch Competition",
  "Artificial Intelligence (AI) in Real Estate",
  "Future of Work",
  "Smart Cities and Urban Innovation",
  "Future of Property Management",
  "Fractional Ownership"
];

export default function ConferenceThemes() {
  return (
    <section className="bg-gray-100 py-40 text-black"> 
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">Conference Themes</h2>
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="relative h-[400px] md:h-[600px]">
            {/* <Image
              src={Confimg}
              alt="Conference themes illustration.."
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg"
            /> */}

            <Image
               src={Confimg}
               alt="Conference themes illustration"
               fill
               className="rounded-lg object-cover shadow-lg"
            />


          </div>
          <div>
            <ul className="space-y-4">
              {themes.map((theme, index) => (
                <li key={index} className="flex items-start">
                  <svg className="mr-2 mt-1 size-6 shrink-0 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="text-lg">{theme}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

