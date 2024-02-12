"use client";
import React from "react";
interface Field {
  label?: string;
  name: string;
  type: string;
  id?: string;
  placeholder: string;
  htmlFor: string;
  value: string;
  pattern?: string;
  onChange: (value: String) => void;
}

const InputField = ({
  label,
  name,
  type,
  placeholder,
  htmlFor,
  value,
  onChange,
  pattern,
}: Field) => {
  return (
    <div className="flex flex-col gap-[6px]">
      <label htmlFor={htmlFor} className=" font-medium text-sm  text-[#344054]">
        {label}
      </label>
      <input
        aria-required
        pattern={pattern}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        required
        className="lg:w-[360px] w-full py-[10px] px-[14px] rounded-[8px] outline-[#D0D5DD] border-[#D0D5DD] border pl-[15px]"
      />
    </div>
  );
};
export default InputField;
