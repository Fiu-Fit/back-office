'use client';
import { User } from '@fiu-fit/common';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Button, ErrorModal, Form, Modal, TextInput } from '@/components';
import { validateEmail, validateName, validatePassword } from '@/utils';

const ADMIN_ROLE = 'Admin';

export default function RegisterForm() {
  const successModalRef = useRef<HTMLInputElement | null>(null);
  const errorModalRef = useRef<HTMLInputElement | null>(null);
  const [error, setError] = useState<string>('null');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const inputs = [
    {
      name:       'firstName',
      label:      'Nombre',
      type:       'text',
      halfWidth:  true,
      validation: validateName(true),
    },
    {
      name:       'lastName',
      label:      'Apellido',
      type:       'text',
      halfWidth:  true,
      validation: validateName(true),
    },
    {
      name:       'email',
      label:      'Email',
      type:       'email',
      halfWidth:  false,
      validation: validateEmail(true),
    },
    {
      name:       'password',
      label:      'Contraseña',
      type:       'password',
      halfWidth:  false,
      validation: validatePassword(true),
    },
    {
      name:       'passwordConfirmation',
      label:      'Confirmar contraseña',
      type:       'password',
      halfWidth:  false,
      validation: validatePassword(true, watch('password')),
    },
  ];

  const onSubmit = async (formData: FieldValues) => {
    setIsLoading(true);
    const registerData: User = {
      ...(formData as User),
      role: ADMIN_ROLE,
    };

    try {
      await axios.post('/api/auth/register', registerData);
      successModalRef.current?.click();
    } catch (err) {
      setIsLoading(false);
      console.error(err);
      if (err instanceof AxiosError) {
        setError(`${err.response?.status} - ${err.response?.statusText}`);
      } else {
        setError('Error desconocido');
      }
      errorModalRef.current?.click();
    }

    setIsLoading(false);
  };

  const handleSuccess = () => {
    successModalRef.current?.click();
    router.replace('/users');
    router.refresh();
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(data => onSubmit(data))}
        className='grid grid-cols-2 gap-4 w-11/12 max-w-lg my-auto'
      >
        {inputs.map(input => (
          <TextInput
            name={input.name}
            key={input.name}
            label={input.label}
            type={input.type}
            register={register}
            validation={input.validation}
            errorMessage={errors[input.name]?.message as string}
            containerClassName={input.halfWidth ? 'col-span-1' : 'col-span-2'}
          />
        ))}
        <Button
          text='Registrar'
          type='submit'
          className='col-span-2'
          isLoading={isLoading}
        />
      </Form>
      <Modal
        id='register-modal'
        innerRef={successModalRef}
        type='undismissable'
      >
        <h1 className='text-lg font-bold mb-4'>¡Registro exitoso!</h1>
        <Button text='Aceptar' onClick={handleSuccess} />
      </Modal>
      <ErrorModal
        id='register-error-modal'
        title='Oops... Ocurrio un problema'
        error={error}
        innerRef={errorModalRef}
      />
    </>
  );
}
