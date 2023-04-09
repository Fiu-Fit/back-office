import Image from "next/image";
import AuthForm from "./AuthForm";

export default function Login() {
  return (
    <main className="flex absolute inset-0 items-center justify-evenly">
      <Image
        src="/fiufit.svg"
        className="hidden lg:block invert dark:invert-0"
        alt="FiuFit"
        width={400}
        height={400}
      />
      <AuthForm />
    </main>
  );
}
