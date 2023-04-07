"use client";
import FormInput from "@/components/FormInput";
import styles from "./page.module.css";
import { SyntheticEvent } from "react";
import Link from "next/link";

const handleSubmit = async (e: SyntheticEvent) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    email: { value: string };
    password: { value: string };
  };

  const body = JSON.stringify({
    email: target.email.value,
    password: target.password.value,
  });

  const res = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  const data = await res.json();

  console.log(data);
};

export default function AuthForm() {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-2 gap-y-2 w-72 sm:w-96"
    >
      <FormInput
        name="email"
        label="Email"
        type="text"
        className="col-span-2"
      />
      <FormInput
        name="password"
        label="Password"
        type="password"
        className="col-span-2"
      />
      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 col-span-2 button"
      >
        Login
      </button>
      <Link href="/register" className={`button ${styles.extra_button}`}>
        Register
      </Link>
      <Link href="/forgot-password" className={`button ${styles.extra_button}`}>
        Forgot your password?
      </Link>
    </form>
  );
}
