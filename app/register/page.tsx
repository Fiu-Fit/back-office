import Image from "next/image";
import RegisterForm from "./RegisterForm";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Register() {
  return (
    <main className="flex min-h-screen min-w-full items-center justify-evenly relative">
      <Link href="/" className='absolute top-6 left-6'>
        <ArrowLeftIcon className="h-14 w-14 p-2 text-white absolute bg-transparent duration-200 hover:bg-white hover:text-black transition-colors rounded-full" />
      </Link>
      <RegisterForm />
    </main>
  );
}
