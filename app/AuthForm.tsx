"use client";
import FormInput from "@/components/FormInput";
import styles from "./page.module.css";
import { SyntheticEvent } from 'react';

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
      className="flex flex-col justify-around w-72 sm:w-96"
    >
      <FormInput name="email" label="Email" type="text" />
      <FormInput name="password" label="Password" type="password" />

      <div className={styles.button_grid}>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 col-span-2"
        >
          Login
        </button>
        <a
          href="/register"
          className="bg-emerald-600 hover:bg-emerald-700 small_button"
        >
          Register
        </a>
        <a
          href="/forgot-password"
          className="bg-gray-700 hover:bg-gray-800 small_button"
        >
          Forgot your password?
        </a>
      </div>
    </form>
  );
}
