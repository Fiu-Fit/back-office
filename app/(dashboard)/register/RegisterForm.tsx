'use client';
import axios from 'axios';
import { FieldValues, useForm } from 'react-hook-form';
import { Button, TextInput } from '@/components';
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
    const registerData = {
      ...formData,
      role: ADMIN_ROLE,
    };

    try {
      await axios.post('/api/auth/register', registerData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(data => onSubmit(data))}
      method='post'
      className='grid grid-cols-2 gap-4 w-11/12 max-w-lg my-auto p-5 rounded-box bg-base-200 border-base-content/5 border'
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
      <Button text='Registrar' type='submit' className='col-span-2' />
    </form>
  );
}
