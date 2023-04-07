import Image from "next/image";
import { Inter } from "next/font/google";
import AuthForm from './AuthForm';

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <main className="flex min-h-screen items-center justify-evenly">
      <Image
        src="/fiufit.svg"
        className="hidden lg:block"
        alt={"FiuFit"}
        width={400}
        height={400}
      />
      <AuthForm />
    </main>
  );
}
