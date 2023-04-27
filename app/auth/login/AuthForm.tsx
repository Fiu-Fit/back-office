'use client';
import axios from 'axios';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import styles from '../../page.module.css';
import FormInput from '@/components/FormInput/FormInput';
import { validateEmail } from '@/utils';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const onSubmit = async (formData: FieldValues) => {
    try {
      const { data: token } = await axios.post('api/auth/login', formData);
      console.log(token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(data => onSubmit(data))}
      className='grid grid-cols-2 gap-4 w-11/12 max-w-md p-5 rounded bg-white dark:bg-zinc-900 shadow'
    >
      <FormInput
        name='email'
        label='Correo electrónico'
        type='text'
        containerClassName='col-span-2'
        register={register}
        options={validateEmail(true)}
        errorMessage={errors.email?.message as string}
      />
      <FormInput
        name='password'
        label='Contraseña'
        type='password'
        containerClassName='col-span-2'
        register={register}
        errorMessage={errors.password?.message as string}
      />
      <button
        type='submit'
        className='text-white bg-blue-600 hover:bg-blue-700 col-span-2 button'
      >
        Iniciar sesión
      </button>
      <Link href='/register' className={`button ${styles.extra_button}`}>
        Registrarse
      </Link>
      <Link href='/forgot-password' className={`button ${styles.extra_button}`}>
        Recuperar contraseña
      </Link>
    </form>
  );
}