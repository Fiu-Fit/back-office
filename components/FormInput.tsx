export default function FormInput({
  name,
  label,
  type,
  containerClassName,
  ...inputProps
}: {
  name: string;
  label: string;
  type: string;
  containerClassName?: string;
  [key: string]: any;
}) {
  return (
    <div className={`min-w-full ${containerClassName}`}>
      <label className="block text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="p-4 rounded-md w-full bg-gray-100 dark:bg-zinc-800 border dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
        {...inputProps}
      />
    </div>
  );
}
