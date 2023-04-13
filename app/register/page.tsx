import RegisterForm from './RegisterForm';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import styles from './page.module.css';

export default function Register() {
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
