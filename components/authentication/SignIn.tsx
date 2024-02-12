"use client";
import { userData } from "@/app/axios-config";
import { ErrorType, handleError } from "@/app/handle-error";
import InputField from "@/components/authentication/input-field";
import { Loader, PasswordInput, clsx } from "@mantine/core";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Ilogin {
  email: string;
  password: string;
}
const UserSignIn = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser: Ilogin = {
    email: email,
    password: password,
  };
  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: Ilogin) => {
      const response = await userData.post(
        `https://devapi.omacart.com/login`,
        data
      );
    },
    mutationKey: ["login"],

    onSuccess(data, variables, context) {
      toast.success("Hey! you just sign in");
      push("/courses");
    },

    onError(error) {
      handleError(error as ErrorType);
    },
  });

  const login = (e: FormEvent) => {
    e.preventDefault();
    mutate(loginUser);
  };

  return (
    <section className="flex h-screen w-full">
      <ToastContainer />

      <div className="h-full lg:w-1/2 w-full bg-white flex flex-col items-center lg:justify-center justify-normal p-[30px]">
        <section className="lg:w-[360px] w-full">
          <div className="flex flex-col gap-3 lg:pb-[100px] pb-[30px]">
            <h3 className="font-semibold text-[#101828] text-3xl">
              Welcome back
            </h3>
            <p className="text-sm font-normal text-[#667085]">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={login} className="flex flex-col gap-5">
            <div>
              <InputField
                value={email}
                onChange={(name) => setEmail(name as string)}
                id="username-input"
                htmlFor="email"
                label="Email"
                name="text"
                type="email"
                placeholder="Enter email address"
              />
            </div>

            <div>
              <InputField
                value={password}
                onChange={(userpassword) => setPassword(userpassword as string)}
                id="username-input"
                htmlFor="email"
                label="Password"
                name="text"
                type="password"
                placeholder="Enter email address"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>

            <section className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="rounded-[4px] border border-[#D0D5DD]"
                />
                <p className="font-medium text-sm text-[#344054]">
                  Remember for 30 days
                </p>
              </div>
              <h3 className="font-semibold cursor-pointer text-sm text-[#6941C6]">
                Forgot password
              </h3>
            </section>

            <button
              type="submit"
              id="submit-button"
              className=" lg:w-[360px] w-full h-12 mt-[4px] text-center flex items-center justify-center rounded-md cursor-pointer bg-[#27779B] border-[#27779B] ease-linear duration-100 font-medium"
            >
              {isLoading ? (
                <span className="flex items-center gap-2 text-base font-semibold text-white">
                  Signing In <Loader size="sm" />
                </span>
              ) : (
                <span className="text-base font-semibold text-white">
                  Sign in
                </span>
              )}
            </button>
          </form>
          <div className="flex items-center justify-center gap-1 lg:pt-[92px] pt-[20px]">
            <p className="font-normal text-sm text-[#475467]">
              Don&apos;t have an account?
            </p>
            <p className="text-sm font-semibold text-[#27779B]">
              <Link href="/sign-up">Sign up</Link>
            </p>
          </div>
        </section>
      </div>
      <div className="h-full hidden lg:block w-1/2 bg-[url(/sign-in.svg)] bg-no-repeat bg-cover object-cover"></div>
    </section>
  );
};
export default UserSignIn;
