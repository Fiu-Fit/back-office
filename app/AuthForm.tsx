"use client";
import FormInput from "@/components/FormInput";
import styles from "./page.module.css";
import { SyntheticEvent, useState } from "react";
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

  return (
    <form
      onSubmit={(event) => handleSubmit(event, formData)}
      className="grid grid-cols-2 gap-x-2 gap-y-2 w-72 sm:w-96"
    >
      <FormInput
        name="email"
        label="Correo electrónico"
        type="text"
        className="col-span-2"
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
      />
      <FormInput
        name="password"
        label="Contraseña"
        type="password"
        className="col-span-2"
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
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
