"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const DelegateSection = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isThankYouPage = pathName.includes("thankyou");
  if (isThankYouPage) return null;

  return (
    <div className="flex w-full items-center justify-center divide-x divide-gray-800 bg-black shadow-md">
      {/* Delegate Pass */}
      <div
        className="flex flex-1 cursor-pointer items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-600
          p-3 font-semibold text-white transition-all duration-300
          hover:from-cyan-500 hover:to-blue-400"
        onClick={() => router.push("/register?type=delegates")}
      >
        <p className="text-sm">Get Delegate Pass</p>
      </div>

      {/* Book Your Stand */}
      <div
        className="flex flex-1 cursor-pointer items-center justify-center bg-white p-3 font-semibold
          text-blue-950 transition-all duration-300 hover:bg-blue-500 hover:text-white "
        onClick={() => router.push("/register")}
      >
        <p className="text-sm">Book Your Stand</p>
      </div>
    </div>
  );
};

export default DelegateSection;
