'use client';
export default function Picker({
  options,
  placeholder,
  onChange,
}: {
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <select className='select w-full max-w-xs' onChange={onChangeHandler} defaultValue={placeholder} >
      {placeholder && (
        <option disabled>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}
