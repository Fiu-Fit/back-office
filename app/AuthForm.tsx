"use client";
import FormInput from "@/components/FormInput";
import styles from "./page.module.css";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { LoginRequest } from "./interfaces";

export default function AuthForm() {
  const [formData, setFormData] = useState<LoginRequest>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: SyntheticEvent, formData: LoginRequest) => {
    e.preventDefault();

    const body = JSON.stringify(formData);

    try {
      const res = await axios.post("api/auth/login", body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const token = res.data;

      console.log(token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleOnChange = (event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <form
      onSubmit={(event) => handleSubmit(event, formData)}
      className="grid grid-cols-2 gap-4 w-11/12 max-w-md p-5 rounded bg-white dark:bg-zinc-900 shadow"
    >
      <FormInput
        name="email"
        label="Correo electrónico"
        type="text"
        containerClassName="col-span-2"
        onChange={handleOnChange}
      />
      <FormInput
        name="password"
        label="Contraseña"
        type="password"
        containerClassName="col-span-2"
        onChange={handleOnChange}
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
