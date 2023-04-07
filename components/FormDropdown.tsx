export default function FormDropdown({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div className="min-w-full">
      <label className="block text-white text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <select
        name={name}
        id={name}
        className="mb-5 p-4 rounded-md min-w-full max-w-full"
      >
        {
        options.map((option, i) => (
          <option value={option} key={i}>{option}</option>
        ))
        }
      </select>
    </div>
  );
}
