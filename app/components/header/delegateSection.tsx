"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const DelegateSection = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isThankYouPage = pathName.includes("thankyou");
  if (isThankYouPage) return null;

  return (
    <div className="w-full bg-black flex justify-center items-center shadow-md divide-x divide-gray-800">
      {/* Delegate Pass */}
      <div
        className="flex-1 flex justify-center items-center p-3 cursor-pointer transition-all duration-300
          bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold
          hover:from-cyan-500 hover:to-blue-400"
        onClick={() => router.push("/register?type=delegates")}
      >
        <p className="text-sm">Get Delegate Pass</p>
      </div>

      {/* Book Your Stand */}
      <div
        className="flex-1 flex justify-center items-center p-3 cursor-pointer transition-all duration-300
          bg-white text-blue-950 font-semibold hover:bg-cyan-500 hover:text-blue-950"
        onClick={() => router.push("/register")}
      >
        <p className="text-sm">Book Your Stand</p>
      </div>
    </div>
  );
};

export default DelegateSection;
