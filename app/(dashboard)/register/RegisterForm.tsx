'use client';
import { Button, TextField } from '@mui/material';
import { FieldValues, useForm } from 'react-hook-form';
import api from '@/api/clientSideAxiosConfig';
import { validateEmail, validateName, validatePassword } from '@/utils';

const ADMIN_ROLE = 'Admin';

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onTouched' });

  const inputs = [
    {
      name:      'firstName',
      label:     'Nombre',
      type:      'text',
      halfWidth: true,
      options:   validateName(true),
    },
    {
      name:      'lastName',
      label:     'Apellido',
      type:      'text',
      halfWidth: true,
      options:   validateName(true),
    },
    {
      name:      'email',
      label:     'Email',
      type:      'email',
      halfWidth: false,
      options:   validateEmail(true),
    },
    {
      name:      'password',
      label:     'Contraseña',
      type:      'password',
      halfWidth: false,
      options:   validatePassword(true),
    },
    {
      name:      'passwordConfirmation',
      label:     'Confirmar contraseña',
      type:      'password',
      halfWidth: false,
      options:   validatePassword(true, watch('password')),
    },
  ];

  const onSubmit = async (formData: FieldValues) => {
    const registerData = {
      ...formData,
      role: ADMIN_ROLE,
    };

    try {
      await api.post(
        '/api/auth/register',
        registerData
      );
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(data => onSubmit(data))}
      method='post'
      className='grid grid-cols-2 gap-4 w-11/12 max-w-lg my-auto p-5 rounded bg-white dark:bg-zinc-900 shadow'
    >
      {inputs.map(input => (
        <TextField
          key={input.name}
          label={input.label}
          type={input.type}
          {...register(input.name, input.options)}
          error={errors[input.name] ? true : false}
          helperText={errors[input.name] ? errors[input.name]?.message as string : ' '}
          className={input.halfWidth ? 'col-span-1' : 'col-span-2'}
        />
      ))}
      <Button
        type='submit'
        size='large'
        variant='contained'
        className='col-span-2'
      >
        Registrarse
      </Button>
    </form>
  );
}
