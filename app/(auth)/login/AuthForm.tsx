'use client';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Button, ErrorModal, Form, TextInput } from '@/components';
import { validateEmail } from '@/utils';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const modalRef = useRef<HTMLInputElement | null>(null);
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
      modalRef.current?.click();
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-1 gap-4 w-11/12 max-w-md'
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
        <Button text='Iniciar sesión' isLoading={isLoading} type='submit' />
        <Link className='btn btn-secondary' href='/forgot-password'>
          Recuperar contraseña
        </Link>
      </Form>

      <ErrorModal
        id='login-error-modal'
        title='Oops... Ocurrio un problema'
        error={loginError}
        innerRef={modalRef}
      />
    </>
  );
}
