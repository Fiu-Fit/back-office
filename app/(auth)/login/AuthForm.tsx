'use client';
import { CircularProgress } from '@mui/material';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { TextInput } from '@/components';
import Modal from '@/components/Modal';
import { validateEmail } from '@/utils';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const onSubmit = async (formData: FieldValues) => {
    setIsLoading(true);
    try {
      const response = await axios.post('api/auth/login', formData);
      if (response.status === HttpStatusCode.Ok) router.push('/users');
      else
        throw new AxiosError(
          undefined,
          response.status as unknown as string,
          response.config,
          response.request,
          response
        );
    } catch (err) {
      const error = err as AxiosError;
      setLoginError(
        `${error.response?.status} - ${error.response?.statusText}`
      );
      document.getElementById('error-modal')?.click();
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-1 gap-4 w-11/12 max-w-md p-5 border-base-content/5 border bg-base-200 rounded-box'
      >
        <TextInput
          name='email'
          label='Correo electrónico'
          type='email'
          register={register}
          errorMessage={errors.email?.message as string}
          validation={validateEmail(true)}
        />
        <TextInput
          name='password'
          label='Contraseña'
          type='password'
          register={register}
          errorMessage={errors.password?.message as string}
          required
        />
        <button type='submit' className='btn btn-primary' disabled={isLoading}>
          {isLoading ? (
            <span className='flex justify-center items-center'>
              <CircularProgress
                color='inherit'
                size='1.5rem'
                className='mr-2'
              />{' '}
              Cargando...
            </span>
          ) : (
            'Iniciar sesión'
          )}
        </button>
        <Link className='btn btn-secondary' href='/forgot-password'>
          Recuperar contraseña
        </Link>
      </form>

      <Modal id='error-modal'>
        <h2 className='text-lg font-bold'>Oops... Hubo un error</h2>
        <h3>Detalles adicionales:</h3>
        <pre>{loginError}</pre>
      </Modal>
    </>
  );
}
