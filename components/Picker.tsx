'use client';
export default function Picker({
  options,
  placeholder,
  onChange,
  label
}: {
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
  label?: string;
}) {
  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='form-control w-full max-w-xs'>
      {label && (
        <label className='label'>
          <span className='label-text'>{label}</span>
        </label>
      )}
      <select
        className='select w-full max-w-xs'
        onChange={onChangeHandler}
        defaultValue={placeholder}
      >
        {placeholder && <option disabled>{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
}
