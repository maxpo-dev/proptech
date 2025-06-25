"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TicketingPageProps {
  onBookNow: (ticketType: string, quantity?: number) => void;
}

export default function TicketingPage({ onBookNow }: TicketingPageProps) {
  const formatPrice = (amount: number) =>
    `$${amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2)}`;

  const vipPass = {
    id: "vip",
    title: "VIP Delegate Pass",
    originalPrice: 496,
    discountedPrice: 248,
    discount: { text: "50% Off", subtext: " Limitted time offer" },
    benefits: [
      "Full access to exhibition area",
      "Full access to all conference sessions",
      "Access to networking lounge",
      "Access to meeting rooms",
      "Dedicated meeting facilitation",
      "PR assistance",
      "Logo promotion in the digital post event report & pre event magazine",
      "Logo on the participant page of the event website",
      "Logo promotion across all marketing collateral including socials & email",
      "Food & refreshments",
    ],
    buttonText: "Get Now",
    cardClass: "bg-blue-900 text-white",
    buttonClass: "bg-white hover:bg-gray-100 text-blue-900",
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Secure Your VIP Delegate Pass
        </h1>
        <p className="text-gray-500 text-lg mt-2">for Future PropTech Summit</p>
      </div>

      <Card
        className={`rounded-3xl shadow-2xl overflow-hidden ${vipPass.cardClass}`}
      >
        <div className="flex flex-col md:flex-row items-start justify-between p-8 gap-8">
          {/* Pricing Section */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold">{vipPass.title}</h2>
            <div className="flex items-end gap-4">
              <span className="text-5xl font-extrabold">
                {formatPrice(vipPass.discountedPrice)}
              </span>
              <span className="text-2xl line-through text-gray-300">
                {formatPrice(vipPass.originalPrice)}
              </span>
            </div>
            <div className="text-sm font-bold w-full  bg-white text-blue-900 flex justify-between px-2 py-2 ">
              <p>{vipPass.discount.subtext}</p>
              <p>{vipPass.discount.text}</p>
            </div>
 <div className="flex justify-center">
<Button
  onClick={() => onBookNow(vipPass.id)}
  className="mt-6 py-3 px-8 rounded-xl text-base font-bold text-white transition duration-300 ease-in-out"
  style={{
    backgroundColor: "#009CE7",
    boxShadow: "0 4px 14px rgba(0, 156, 231, 0.4)",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#007DBF")}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#009CE7")}
>
  {vipPass.buttonText}
</Button>

            </div>
          </div>

          {/* Benefits List */}
          <div className="flex-1 mt-6 md:mt-0">
            <h4 className="text-lg font-semibold mb-4">Benefits Include:</h4>
            <ul className="space-y-3">
              {vipPass.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
                  <span className="text-sm leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}


// "use client";

// import { Check } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";

// interface TicketingPageProps {
//   onBookNow: (ticketType: string, quantity?: number) => void;
// }

// export default function TicketingPage({ onBookNow }: TicketingPageProps) {
//   const formatPrice = (amount: number) =>
//     `$${amount % 1 === 0 ? amount.toFixed(0) : amount.toFixed(2)}`;

//   const vipPass = {
//     id: "vip",
//     title: "VIP Delegate Pass",
//     originalPrice: 496,
//     discountedPrice: 248,
//     discount: { text: "50% Off", subtext: "Limited time offer" },
//     benefits: [
//       "Full access to exhibition area",
//       "Full access to all conference sessions",
//       "Access to networking lounge",
//       "Access to meeting rooms",
//       "Dedicated meeting facilitation",
//       "PR assistance",
//       "Logo promotion in the digital post event report & pre event magazine",
//       "Logo on the participant page of the event website",
//       "Logo promotion across all marketing collateral including socials & email",
//       "Food & refreshments",
//     ],
//     buttonText: "Get Now",
//     cardClass: "bg-blue-900 text-white",
//   };

//   return (
//     <section className="max-w-4xl mx-auto px-4 py-12">
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-extrabold text-gray-900">
//           Secure Your VIP Delegate Pass
//         </h1>
//         <p className="text-gray-500 text-lg mt-2">for Future PropTech Summit</p>
//       </div>

//       <div className="relative">
//         {/* Ribbon */}
//         <div className="absolute top-0 left-0 z-10">
//           <div className="bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded-br-xl shadow-md">
//             {vipPass.discount.text} – {vipPass.discount.subtext}
//           </div>
//         </div>

//         <Card className={`rounded-3xl shadow-2xl overflow-hidden ${vipPass.cardClass}`}>
//           <div className="flex flex-col md:flex-row items-start justify-between p-8 gap-8">
//             {/* Pricing Section */}
//             <div className="flex-1 space-y-5">
//            <h2 className="text-2xl font-semibold mt-4">{vipPass.title}</h2>


//               <div className="flex items-end gap-4">
//                 <span className="text-5xl font-extrabold">
//                   {formatPrice(vipPass.discountedPrice)}
//                 </span>
//                 <span className="text-2xl line-through text-gray-300">
//                   {formatPrice(vipPass.originalPrice)}
//                 </span>
//               </div>

//               <div className="flex justify-center md:justify-start">
//                 <Button
//                   onClick={() => onBookNow(vipPass.id)}
//                   className="mt-4 py-3 px-10 rounded-xl text-base font-bold text-white transition duration-300 ease-in-out"
//                   style={{
//                     backgroundColor: "#009CE7",
//                     boxShadow: "0 4px 14px rgba(0, 156, 231, 0.4)",
//                   }}
//                   onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#007DBF")}
//                   onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#009CE7")}
//                 >
//                   {vipPass.buttonText}
//                 </Button>
//               </div>
//             </div>

//             {/* Benefits List */}
//             <div className="flex-1 mt-6 md:mt-0">
//               <h4 className="text-xl font-semibold mb-4">Benefits Include:</h4>
//               <ul className="space-y-3">
//                 {vipPass.benefits.map((benefit, index) => (
//                   <li key={index} className="flex items-start gap-3">
//                     <Check className="w-5 h-5 mt-1 flex-shrink-0 text-white" />
//                     <span className="text-sm leading-relaxed">{benefit}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
//   );
// }
