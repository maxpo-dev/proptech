"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import { useField, useFormikContext } from "formik";
import "react-phone-input-2/lib/style.css";

const PhoneInputField = ({ name }: { name: string }) => {
  const { setFieldValue, setFieldTouched } = useFormikContext();
  const [field, meta] = useField(name);

  const isError = meta.touched && meta.error;

  const baseInputClass =
    "!w-full !pl-[60px] !pr-3 !py-2 !text-sm border !bg-white focus:outline-none";
  const errorClass = isError
    ? "!border-red-500 focus:!ring-red-300"
    : "!border-black focus:!ring-blue-300";

  const buttonErrorClass = isError ? "!border-red-500" : "!border-black";

  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-semibold text-black mb-1">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <div className="w-full">
        <PhoneInput
          country={"ae"}
          value={field.value}
          onChange={(value) => setFieldValue(name, value)}
          onBlur={() => setFieldTouched(name, true)}
          containerClass="w-full"
          inputClass={`${baseInputClass} ${errorClass} !rounded-sm`}
          buttonClass={`!bg-white !border-r !px-2 !py-2 !rounded-l-sm ${buttonErrorClass}`}
          inputProps={{
            name,
            autoComplete: "tel",
          }}
        />
      </div>
      {isError && (
        <p className="mt-1 text-xs text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default PhoneInputField;
