'use client';
export default function Picker({
  options,
  placeholder,
  onChange,
}: {
  options: string[];
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <select className='select w-full max-w-xs' onChange={onChange}>
      {placeholder && (
        <option disabled selected>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}
