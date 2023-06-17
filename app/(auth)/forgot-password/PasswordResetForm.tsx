'use client';
import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { RequestError } from './RequestError';
import SuccessModal from './SuccessModal';
import { Button, Form, TextInput } from '@/components';
import { validateEmail } from '@/utils';

export default function PasswordResetForm({
  resetPassword,
}: {
  resetPassword: (formData: FieldValues) => Promise<void | RequestError>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(' ');
  const modalRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = async (formData: FieldValues) => {
    setIsLoading(true);
    setRequestError(' ');

    const result = await resetPassword(formData);

    if (result) {
      const error = result as RequestError;
      if (error.status) {
        setRequestError(`${error.status} - ${error.statusText}`);
      } else {
        setRequestError(error.statusText);
      }
    } else {
      modalRef.current?.click();
    }

    setIsLoading(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className='max-w-lg'>
        <h1 className='text-3xl mb-5 font-medium'>Reestablecer contraseña</h1>
        <p className='text-info mb-5'>
          Ingresa tu correo electronico en el siguiente campo. Una vez hayas
          clickeado "aceptar", revisa tu bandeja de entrada para mas
          instrucciones.
        </p>
        <TextInput
          name='email'
          label='Correo electrónico'
          type='email'
          register={register}
          errorMessage={errors.email?.message as string}
          validation={validateEmail(true)}
        />
        <p className='text-error mb-5 min-h-[1.5rem]'>
          {requestError !== ' ' ? `Error: ${requestError}` : ''}
        </p>
        <Button
          text='Enviar correo electronico'
          isLoading={isLoading}
          type='submit'
          className='w-full'
        />
      </Form>
      <SuccessModal innerRef={modalRef} />
    </>
  );
}
