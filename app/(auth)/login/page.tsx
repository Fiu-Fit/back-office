import Image from 'next/image';
import AuthForm from './AuthForm';
import fiuFitLogo from '@/public/fiufit.svg';

export default function Login() {
  return (
    <main className='flex items-center justify-evenly h-screen w-screen container'>
      <Image
        src={fiuFitLogo}
        className='w-1/4 hidden lg:block invert dark:invert-0'
        alt='FiuFit'
      />
      <AuthForm />
    </main>
  );
}
