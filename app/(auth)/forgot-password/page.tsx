import { AxiosError } from 'axios';
import { FieldValues } from 'react-hook-form';
import PasswordResetForm from './PasswordResetForm';
import { RequestError } from './RequestError';
import api from '@/api/serverSideAxiosConfig';

export default function ForgotPasswordPage() {
  const resetPassword = async (
    formData: FieldValues
  ): Promise<void | RequestError> => {
    'use server';
    try {
      await api.post('auth/password-reset', formData);
    } catch (err) {
      return err instanceof AxiosError
        ? {
            status:     err.response?.status,
            statusText: err.response?.statusText || 'Error desconocido',
          }
        : {
            statusText: 'Error desconocido',
          };
    }
  };

  return (
    <main className='flex items-center justify-evenly h-screen w-screen container'>
      <PasswordResetForm resetPassword={resetPassword} />
    </main>
  );
}
