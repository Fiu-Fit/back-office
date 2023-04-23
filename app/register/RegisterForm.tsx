'use client';
import FormInput from '@/components/FormInput/FormInput';
import axiosInstance from '@/api/clientSideAxiosConfig';
import { validateName, validateEmail, validatePassword } from '@/utils';
import { FieldValues, useForm } from 'react-hook-form';
  
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
      name: 'firstName',
      label: 'Nombre',
      type: 'text',
      halfWidth: true,
      options: validateName(true),
    },
    {
      name: 'lastName',
      label: 'Apellido',
      type: 'text',
      halfWidth: true,
      options: validateName(true),
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      halfWidth: false,
      options: validateEmail(true),
    },
    {
      name: 'password',
      label: 'Contraseña',
      type: 'password',
      halfWidth: false,
      options: validatePassword(true),
    },
    {
      name: 'passwordConfirmation',
      label: 'Confirmar contraseña',
      type: 'password',
      halfWidth: false,
      options: validatePassword(true, watch('password')),
    },
  ];

  const onSubmit = async (formData: FieldValues) => {
    const registerData = {
      ...formData,
      role: ADMIN_ROLE,
    };

    try {
      const { data: token } = await axiosInstance.post(
        '/api/auth/register',
        registerData
      );
      console.log(token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(data => onSubmit(data))}
      method="post"
      className="grid grid-cols-2 gap-4 w-11/12 max-w-lg my-auto p-5 rounded bg-white dark:bg-zinc-900 shadow"
    >
      {inputs.map(input => (
        <FormInput
          key={input.name}
          label={input.label}
          type={input.type}
          name={input.name}
          containerClassName={`col-span-2 ${
            input.halfWidth && 'sm:col-span-1'
          }`}
          register={register}
          errorMessage={errors[input.name]?.message as string}
          options={input.options}
        />
      ))}
      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 col-span-2 button"
      >
        Registrarse
      </button>
    </form>
  );
}
