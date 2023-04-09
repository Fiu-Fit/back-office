"use client";
import FormInput from "@/components/FormInput";
import axios from "axios";
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
    role: "Admin",
  });

  try {
    const res = await axios.post("/api/auth/register", body, {
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

const halfWidthInputs = [
  {
    name: "firstName",
    label: "Nombre",
    type: "text",
  },
  {
    name: "lastName",
    label: "Apellido",
    type: "text",
  },
];

const fullWidthInputs = [
  {
    name: "email",
    label: "Email",
    type: "text",
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
  },
  {
    name: "passwordConfirmation",
    label: "Confirmar contraseña",
    type: "password",
  },
];

export default function RegisterForm() {
  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="grid grid-cols-2 gap-x-4 gap-y-2 w-4/5 max-w-lg my-auto py-3"
    >
      {halfWidthInputs.map((input) => (
        <FormInput
          key={input.name}
          name={input.name}
          label={input.label}
          type={input.type}
          className="col-span-2 sm:col-span-1"
        />
      ))}
      {fullWidthInputs.map((input) => (
        <FormInput
          key={input.name}
          name={input.name}
          label={input.label}
          type={input.type}
          className="col-span-2"
        />
      ))}
      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 col-span-2 button"
      >
        Registrarse
      </button>
    </form>
  );
}
