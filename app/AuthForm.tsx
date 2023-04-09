"use client";
import FormInput from "@/components/FormInput";
import styles from "./page.module.css";
import { SyntheticEvent } from "react";
import Link from "next/link";
import axios from "axios";

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

  try {
    const res = await axios.post("api/auth/login", body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = res.data;

    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

export default function AuthForm() {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-x-2 gap-y-2 w-72 sm:w-96"
    >
      <FormInput
        name="email"
        label="Correo electrónico"
        type="text"
        className="col-span-2"
      />
      <FormInput
        name="password"
        label="Contraseña"
        type="password"
        className="col-span-2"
      />
      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 col-span-2 button"
      >
        Iniciar sesión
      </button>
      <Link href="/register" className={`button ${styles.extra_button}`}>
        Registrarse
      </Link>
      <Link href="/forgot-password" className={`button ${styles.extra_button}`}>
        Recuperar contraseña
      </Link>
    </form>
  );
}
