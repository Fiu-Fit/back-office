import RegisterForm from './RegisterForm';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import styles from './page.module.css';
import { redirect } from 'next/navigation';
import axiosInstance from '@/api/serverSideAxiosConfig';
import { HttpStatusCode } from 'axios';
import { cookies } from 'next/headers';

export default async function Register() {
  const token = cookies().get('token')?.value;
  console.log('The token is ', token);
  try {
    const response = await axiosInstance.post('/auth/validate', { token });
    if (response.status !== HttpStatusCode.Ok) redirect('/');
  } catch (err) {
    console.error(err);
    redirect('/');
  }

  return (
    <main className="flex flex-col min-h-screen min-w-full items-center relative">
      <div className="block self-start mt-2">
        <Link href="/">
          <ArrowLeftIcon className={`h-14 w-14 ${styles.back_arrow}`} />
        </Link>
      </div>
      <RegisterForm />
    </main>
  );
}
