import { FieldValues, UseFormRegister } from 'react-hook-form';
import { ValidationOptions } from '@/utils';

interface InputProps {
  name: string;
  label: string;
  type: string;
  errorMessage?: string;
  containerClassName?: string;
  required?: boolean;
  options?: { [key: string]: any };
  register: UseFormRegister<FieldValues>;
  validation?: ValidationOptions;
  placeholder?: string;
  [key: string]: any;
}

export default function TextInput({
  name,
  label,
  type,
  containerClassName,
  errorMessage,
  register,
  required,
  validation,
  placeholder,
  ...innerInputProps
}: InputProps) {
  const isRequired = required || validation?.required?.value || false;
  const requiredMessage =
    validation?.required?.message || 'Este campo es requerido';
  return (
    <div className={`form-control w-full ${containerClassName}`}>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered ${errorMessage && 'input-error'}`}
        {...register(name, {
          required: {
            value:   isRequired,
            message: requiredMessage,
          },
          ...validation,
        })}
        {...innerInputProps}
      />
      <label className='label h-6'>
        {errorMessage && <span className='label-text-alt text-error'>{errorMessage}</span>}
      </label>
    </div>
  );
}
