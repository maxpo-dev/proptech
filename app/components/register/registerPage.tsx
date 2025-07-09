"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RegisterForm from "./registerForm";

type FormTypes =
  | "enquiry"
  | "delegates"
  | "exhibitors"
  | "sponsor"
  | "participants";

const options = [
  { label: "Sponsor", key: "sponsor" },
  { label: "Exhibitors", key: "exhibitors" },
  { label: "Delegates", key: "delegates" },
  { label: "Participants", key: "participants" },
];

const formDetails: Record<string, { title: string; description: string }> = {
  sponsor: {
    title: "Sponsor Registration",
    description:
      "Join Future PropTech Summit as a sponsor and connect with top real estate tech leaders.",
  },
  exhibitors: {
    title: "Exhibitor Registration",
    description:
      "Showcase your solutions at Future PropTech Summit and connect with industry innovators.",
  },
  delegates: {
    title: "Delegate Registration",
    description:
      "Register now to attend Future PropTech Summit as a delegate and gain full access to sessions, networking, and insights.",
  },
  participants: {
    title: "Participant Registration",
    description:
      "Sign up to be a participant at the Future PropTech Summit and experience the latest in real estate innovation.",
  },
};

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const selectedType = searchParams.get("type");
    setSelected(selectedType);
  }, [searchParams]);

  const handleSelect = (key: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("type", key);
    router.push(`/register?${params.toString()}`);
  };

  const selectedForm = formDetails[selected || ""] ?? {
    title: "Enquire Now",
    description:
      "Fill out the form to contact our team. We're here to help with sponsorships, registration, and event details.",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {options.map((opt) => (
            <button
              key={opt.key}
              onClick={() => handleSelect(opt.key)}
              className={`rounded-full px-5 py-2 font-semibold transition ${
                selected === opt.key
                  ? "bg-blue-600 text-white"
                  : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-100"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="rounded-lg bg-white p-3 shadow-md md:p-6">
          <RegisterForm
            type={(selected as FormTypes) || "enquiry"}
            {...selectedForm}
          />
        </div>
      </div>
    </div>
  );
}
