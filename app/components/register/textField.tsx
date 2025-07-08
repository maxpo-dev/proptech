import React from "react";
import { useField } from "formik";

interface Option {
  value: string;
  label: string;
}

interface TextFieldProps
  extends React.InputHTMLAttributes<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > {
  label: string;
  name: string;
  as?: "input" | "textarea" | "select";
  rows?: number;
  required?: boolean;
  options?: Option[]; // Only used when `as="select"`
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  as = "input",
  options = [],
  rows,
  required = false,
  ...props
}) => {
  const [field, meta] = useField(props.name);
  const errorClass =
    meta.touched && meta.error
      ? "border-red-500 focus:ring-red-300"
      : "border-black focus:ring-blue-300";

  const commonClasses = `w-full px-3 py-2 border rounded-sm text-sm focus:outline-none  focus:ring-2 ${errorClass}`;

  let InputComponent;

  if (as === "textarea") {
    InputComponent = (
      <textarea
        id={props.id || props.name}
        {...field}
        {...props}
        rows={rows || 3}
        className={commonClasses}
      />
    );
  } else if (as === "select") {
    InputComponent = (
      <select
        {...field}
        {...props}
        id={props.id || props.name}
        className={commonClasses}
      >
        <option value="" disabled hidden>
          Select your country
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  } else {
    InputComponent = (
      <input
        id={props.id || props.name}
        {...field}
        {...props}
        className={commonClasses}
      />
    );
  }

  return (
    <div className="mb-4 w-full">
      <label
        htmlFor={props.id || props.name}
        className="mb-1 block text-sm font-semibold text-black"
      >
        {label} {required ? <span className="text-red-500">*</span> : null}
      </label>
      {InputComponent}
      {meta.touched && meta.error && (
        <p className="mt-1 text-xs text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default TextField;
