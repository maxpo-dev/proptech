"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const DelegateSection = () => {
  const router = useRouter();
  const pathName = usePathname();
  const params=useSearchParams()
  const searchParams = params.get("type");

  const isRegisterPage = pathName.includes("register");
  const isDelegatePage = searchParams === "delegates";
  const isThankYouPage = pathName.includes("thankyou");

  // Don't render on thank you pages
  if (isThankYouPage) return null;

  return (
    <div className="w-full bg-white flex justify-center items-center divide-x divide-gray-300 shadow-md ">
      {/* Delegate Pass */}
      <div
        className={
          isDelegatePage
            ? "bg-blue-950 text-white flex-1 border flex justify-center items-center p-1 cursor-pointer"
            : "bg-white flex-1 border flex justify-center hover:border-white items-center p-1 cursor-pointer text-gray-800 hover:bg-blue-950 hover:text-white transition "
        }
        onClick={() => router.push("/register?type=delegates")}
      >
        <p className="text-sm font-semibold">Get Delegate Pass</p>
      </div>

      {/* Book Your Stand */}
      <div
        className={
          isRegisterPage && !isDelegatePage
            ? "bg-blue-950 text-white flex-1 flex justify-center border items-center p-1 cursor-pointer"
            : "bg-white flex-1 flex justify-center border hover:border-white items-center p-1 cursor-pointer text-gray-800 hover:bg-blue-950 hover:text-white transition"
        }
        onClick={() => router.push("/register")}
      >
        <p className="text-sm font-semibold">Book Your Stand</p>
      </div>
    </div>
  );
};

export default DelegateSection;
