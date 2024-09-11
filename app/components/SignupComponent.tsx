"use client";
import { Button, Input } from "@nextui-org/react";
import React, { FormEvent, useState } from "react";
import { validateRegisterForm } from "../utils/validateForm";
import axios from "axios";
import { RegisterDefaults } from "../utils/defaults";
import Swal from "sweetalert2";
import { useStore } from "../store/zustandStore";

interface FormValues {
  email: string | null;
  password: string | null;
  repeatpassword: string | null;
}

export default function SignupComponent() {
  const { toggleLoginVisible } = useStore();
  const [formInfo, setFormInfo] = useState<FormValues>({
    email: "",
    password: "",
    repeatpassword: "",
  });
  const [formErrors, setFormErrors] = useState<FormValues>({
    email: null,
    password: null,
    repeatpassword: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInfo({
      ...formInfo,
      [e.target.id]: e.target.value,
    });
    setFormErrors({
      ...validateRegisterForm({
        ...formInfo,
        [e.target.id]: e.target.value,
      }),
    });
  };

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(process.env.NEXT_PUBLIC_BE_URL + "/auth/register", {
        ...RegisterDefaults,
        emailAddress: formInfo.email,
        secret: formInfo.password,
      });
      Swal.fire({
        title: "Registered!",
        text: "Now you can login",
        icon: "success",
        background: "#262626",
        width: "350px",
        confirmButtonColor: "#f0b90b",
        color: "#ffffff",
      });
      toggleLoginVisible();
      document.body.style.overflow = "auto";
    } catch (error: unknown) {
      Swal.fire({
        title: "Oops!",
        // @ts-expect-error stupid vercel rules
        text: error.message,
        icon: "error",
        background: "#262626",
        width: "350px",
        confirmButtonColor: "#f0b90b",
        color: "#ffffff",
      });
    }
  };
  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <h2 className="text-center lg:hidden sm:text-4xl text-xl">
        Welcome to Quickbet Movies!
      </h2>
      <form
        className="flex flex-col w-full pt-10 sm:gap-3"
        onSubmit={handleRegister}
      >
        <p className="font-aksara text-center lg:hidden">
          Ready to unlock a universe of cinematic delights? 🎬
        </p>
        <Input
          id="email"
          type="email"
          label="Email"
          errorMessage={formErrors.email}
          isInvalid={!!formErrors.email}
          labelPlacement="outside"
          onChange={handleInputChange}
          value={formInfo.email as string}
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
          errorMessage={formErrors.password}
          type="password"
          isInvalid={!!formErrors.password}
          label="Password"
          labelPlacement="outside"
          value={formInfo.password as string}
          radius="sm"
          onChange={handleInputChange}
          variant="flat"
          classNames={{
            inputWrapper: "rounded-b-none",
            input:
              " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
          }}
        />
        <Input
          id="repeatpassword"
          errorMessage={formErrors.repeatpassword}
          type="password"
          label="Repeat Password"
          isInvalid={!!formErrors.repeatpassword}
          value={formInfo.repeatpassword as string}
          labelPlacement="outside"
          radius="sm"
          onChange={handleInputChange}
          variant="flat"
          classNames={{
            inputWrapper: "rounded-b-none",
            input:
              " rounded-b-none focus:outline-none border-transparent focus:border-transparent focus:ring-0",
          }}
        />
        <Button
          color="primary"
          className="text-black mt-5"
          radius="sm"
          type="submit"
          isDisabled={
            !formInfo.email ||
            !!formErrors.email ||
            !formInfo.password ||
            !!formErrors.password ||
            !formInfo.repeatpassword ||
            !!formErrors.repeatpassword
          }
        >
          Register with your Email
        </Button>
      </form>
      <p className="font-aksara hidden lg:block text-sm text-center mt-10">
        No questions? Great!
      </p>
    </div>
  );
}
