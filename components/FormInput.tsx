export default function FormInput({
  name,
  label,
  type,
  className,
}: {
  name: string;
  label: string;
  type: string;
  className?: string;
}) {
  return (
    <div className={`min-w-full ${className}`}>
      <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="p-4 rounded-md min-w-full max-w-full"
      />
    </div>
  );
}
