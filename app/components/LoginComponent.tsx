"use client";
import { Button, Input } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { validateLoginForm } from "../utils/validateForm";
import { signIn } from "next-auth/react";
import { useStore } from "../store/zustandStore";
import Swal from "sweetalert2";

interface FormValues {
  email: string | null;
  password: string | null;
}

export default function LoginComponent() {
  const { toggleLoginVisible, toggleIsLogged } = useStore();

  const [loginValues, setLoginValues] = useState<FormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormValues>({
    email: null,
    password: null,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginValues({
      ...loginValues,
      [e.target.id]: e.target.value,
    });
    setErrors({
      ...validateLoginForm({ ...loginValues, [e.target.id]: e.target.value }),
    });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email: loginValues.email,
      password: loginValues.password,
    });

    if (res && !res.error) {
      Swal.fire({
        title: "Logged!",
        icon: "success",
        background: "#262626",
        width: "350px",
        confirmButtonColor: "#f0b90b",
        color: "#ffffff",
      });
      toggleLoginVisible();
      toggleIsLogged();
      document.body.style.overflow = "auto";
    } else {
      Swal.fire({
        title: "Incorrect credentials",
        icon: "error",
        background: "#262626",
        width: "350px",
        color: "#ffffff",
        confirmButtonColor: "#f0b90b",
      });
    }
  };
  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-4xl text-center">Welcome back to Quickbet Movies!</h2>
      <form className="flex flex-col w-full pt-10 gap-3" onSubmit={handleLogin}>
        <p className="font-aksara text-center">We love having you back 🍿</p>
        <Input
          id="email"
          type="email"
          label="Email"
          errorMessage={errors.email}
          isInvalid={!!errors.email}
          value={loginValues.email as string}
          labelPlacement="outside"
          onChange={handleInputChange}
          radius="sm"
          variant="flat"
          classNames={{
            inputWrapper: "rounded-b-none",
            input:
              " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
          }}
        />
        <Input
          id="password"
          type="password"
          label="Password"
          onChange={handleInputChange}
          isInvalid={!!errors.password}
          errorMessage={errors.password}
          value={loginValues.password as string}
          labelPlacement="outside"
          radius="sm"
          variant="flat"
          classNames={{
            inputWrapper: "rounded-b-none",
            input:
              "rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
          }}
        />
        <Button
          type="submit"
          color="primary"
          className="text-black mt-5"
          radius="sm"
          isDisabled={
            !loginValues.email ||
            !!errors.email ||
            !loginValues.password ||
            !!errors.password
          }
        >
          Continue
        </Button>
      </form>
      <div className="mt-20 flex justify-center">
        <p className="font-aksara text-sm text-center w-[80%]">
          For any questions, please hesitate reaching out.
        </p>
      </div>
    </div>
  );
}
