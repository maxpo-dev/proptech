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
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-lg md:max-w-3xl  bg-white border border-blue-400 rounded-lg p-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black cursor-pointer"
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
