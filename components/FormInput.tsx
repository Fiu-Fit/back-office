import { ChangeEvent } from "react";

export default function FormInput({
  name,
  label,
  type,
  className,
  onChange,
}: {
  name: string;
  label: string;
  type: string;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={`min-w-full ${className}`}>
      <label className="block text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="p-4 rounded-md min-w-full max-w-full"
        onChange={onChange}
      />
    </div>
  );
}
