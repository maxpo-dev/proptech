// app/register/page.tsx

'use client'

import EventContent from '../components/EventInfo';
// import ExhibitorForm from '../components/exhibitor';
import ContactUs from '../components/reg';
import RegisterHeroSection from '../components/RegisterHerosection';

export default function Register() {
  return (
    <div>
      {/* <RegisterHeroSection /> */}
      {/* <div className='bg-slate-200'> */}
      {/* <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 animate-fadeInContent py-14"> */}
        {/* Grid layout for the hero section */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 h-full"> */}
          
          {/* Left Side: EventInfo Component */}
          <div className="pt-10">
            <EventContent />
          </div>

          {/* Right Side: RegisterForm or other content */}
          {/* <div className="flex flex-col h-full p-6  rounded-lg">
            <ExhibitorForm /> {/* Your RegisterForm component */}
          {/* </div>  */}
          <ContactUs />

        </div>
      // </div>
      // </div>
    // </div> 
  )
}
