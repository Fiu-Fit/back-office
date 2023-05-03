import { FieldValues, UseFormRegister } from 'react-hook-form';
import styles from './FormInput.module.css';
import { TextField } from '@/components/@mui/material';

interface InputProps {
  name: string;
  label: string;
  type: string;
  errorMessage?: string;
  containerClassName?: string;
  required?: boolean;
  options?: { [key: string]: any };
  register: UseFormRegister<FieldValues>;
  [key: string]: any;
}

export default function FormInput({
  name,
  label,
  type,
  containerClassName,
  errorMessage,
  register,
  required,
  options,
  ...innerInputProps
}: InputProps) {
  return (
    <div className={`min-w-full ${containerClassName}`}>
      <label className='block text-sm font-bold mb-2' htmlFor={name}>
        {label}
      </label>
      <TextField
        type={type}
        className={`${styles.input} ${errorMessage && styles.error_input}`}
        {...register(name, {
          required: required,
          validate: options?.validate,
          ...options,
        })}
        {...innerInputProps}
      />
      {errorMessage && <p className={styles.error_text}>{errorMessage}</p>}
    </div>
  );
}
