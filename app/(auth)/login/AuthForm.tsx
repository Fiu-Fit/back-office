'use client';
import { Button, CircularProgress, TextField } from '@mui/material';
import axios, { AxiosError, HttpStatusCode } from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { validateEmail } from '@/utils';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (formData: FieldValues) => {
    setIsLoading(true);
    try {
      const response = await axios.post('api/auth/login', formData);
      if (response.status === HttpStatusCode.Ok) router.push('/users');
    } catch (err) {
      const error = err as AxiosError;
      Swal.fire({
        icon:               'error',
        title:              'Oops...',
        html:               `Credenciales incorrectas.<pre>Error: ${error.response?.status} - ${error.response?.statusText}</pre>`,
        background:         'rgb(24 24 27)',
        color:              '#FFFFFF',
        confirmButtonColor: '#3085d6',
      });
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(data => onSubmit(data))}
      className='grid grid-cols-1 gap-4 w-11/12 max-w-md p-5 rounded bg-neutral shadow'
    >
      <TextField
        label='Correo electrónico'
        type='text'
        {...register('email', {
          ...validateEmail(true),
        })}
        error={errors.email ? true : false}
        helperText={errors.email ? (errors.email.message as string) : ' '}
      />
      <TextField
        label='Contraseña'
        type='password'
        {...register('password', {
          required: 'Este campo es requerido',
        })}
        error={errors.password ? true : false}
        helperText={errors.password ? (errors.password.message as string) : ' '}
      />
      <Button
        type='submit'
        size='large'
        variant='contained'
        disabled={isLoading}
      >
        {isLoading ? (
          <span className='flex justify-center items-center'>
            <CircularProgress color='inherit' size='1.5rem' className='mr-2' /> Cargando...
          </span>
        ) : (
          'Iniciar sesión'
        )}
      </Button>
      <Button size='large' LinkComponent={Link} href='forgot-password'>
        Recuperar contraseña
      </Button>
    </form>
  );
}
