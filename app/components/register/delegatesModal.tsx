import { X } from "lucide-react";
import FormSection from "./formSection";

interface BenefitsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DelgatesModal({
  isOpen,
  onClose,
}: BenefitsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
      <div className="relative max-h-[90vh] w-full max-w-lg  overflow-y-auto rounded-lg border border-blue-400 bg-white p-6 md:max-w-3xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 cursor-pointer text-neutral-400 hover:text-black"
        >
          <X size={20} />
        </button>

        {/* Divider */}
        <div className=" pt-4">
          <FormSection type="delegates" />
        </div>
      </div>
    </div>
  );
}
