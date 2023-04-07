import Image from "next/image";
import RegisterForm from "./RegisterForm";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Register() {
  return (
    <main className="flex flex-col min-h-screen min-w-full items-center relative">
      <div className='block self-start mt-2'>
      <Link href="/">
        <ArrowLeftIcon className="h-14 w-14 p-2 text-white bg-transparent duration-200 hover:bg-white hover:text-black transition-colors rounded-full" />
      </Link>
      </div>
      <RegisterForm />
    </main>
  );
}
