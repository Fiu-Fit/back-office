"use client";
import FormInput from "@/components/FormInput";
import axios from "axios";
import { SyntheticEvent, useState } from "react";
import { RegisterRequest } from "./interfaces";

const ADMIN_ROLE = "Admin";

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
  const [formData, setFormData] = useState<RegisterRequest>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSubmit = async (e: SyntheticEvent, formData: RegisterRequest) => {
    e.preventDefault();
    const registerData = {
      ...formData,
      role: ADMIN_ROLE,
    };
    const body = JSON.stringify(registerData);
    
    try {
      const res = await axios.post("/api/auth/register", body, {
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
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
        />
      ))}
      {fullWidthInputs.map((input) => (
        <FormInput
          key={input.name}
          name={input.name}
          label={input.label}
          type={input.type}
          className="col-span-2"
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
          }}
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
