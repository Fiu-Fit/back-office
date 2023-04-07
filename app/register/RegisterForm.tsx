"use client";

import FormInput from "@/components/FormInput";
import styles from "../page.module.css";
import { SyntheticEvent } from "react";

const handleSubmit = async (e: SyntheticEvent) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    firstName: { value: string };
    lastName: { value: string };
    email: { value: string };
    password: { value: string };
    role: { value: string };
  };

  const body = JSON.stringify({
    firstName: target.firstName.value,
    lastName: target.lastName.value,
    email: target.email.value,
    password: target.password.value,
    role: 'Admin',
  });

  const res = await fetch("http://localhost:8080/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });
  const data = await res.json();

  console.log(data);
};

export default function RegisterForm() {
  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="grid grid-cols-2 gap-x-4 gap-y-2 w-4/5 max-w-lg my-auto py-3"
    >
      <FormInput
        name="firstName"
        label="Nombre"
        type="text"
        className="col-span-2 sm:col-span-1"
      />
      <FormInput
        name="lastName"
        label="Apellido"
        type="text"
        className="col-span-2  sm:col-span-1"
      />
      <FormInput
        name="email"
        label="Email"
        type="text"
        className="col-span-2"
      />
      <FormInput
        name="password"
        label="Contraseña"
        type="password"
        className="col-span-2"
      />
      <FormInput
        name="passwordConfirmation"
        label="Confirmar contraseña"
        type="password"
        className="col-span-2"
      />

      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 col-span-2 button"
      >
        Registrarse
      </button>
    </form>
  );
}
