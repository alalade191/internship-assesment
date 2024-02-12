"use client";

import InputField from "@/components/authentication/input-field";
import { Loader } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { userData } from "@/app/axios-config";
import { ErrorType, handleError } from "@/app/handle-error";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface IUserSignUp {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

const UserSignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Disabled, setDisabled] = useState(false);

  const signupUser: IUserSignUp = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: async (data: IUserSignUp) => {
      const response = await userData.post(
        `https://devapi.omacart.com/signup`,
        data
      );
    },
    mutationKey: ["signup"],

    onSuccess(data, variables, context) {
      toast.success("Yuppy! You just sign up");
    },
    onError(error) {
      handleError(error as ErrorType);
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    mutate(signupUser);
  };

  return (
    <section className="lg:flex h-screen w-full">
      <ToastContainer />
      <div className="h-full hidden  w-[70%] bg-[url(/section.jpg)] bg-no-repeat bg-cover object-cover relative lg:flex flex-col items-center justify-center">
        <div className=" top-0 left-0 w-full h-full absolute bg-[#42307D]/70"></div>
        <section className="flex flex-col gap-4 z-[9999]">
          <Image src="star.svg" width={40} height={40} alt="star" />
          <div className="flex flex-col max-w-[672px]">
            <h3 className=" font-medium text-[72px] text-white">
              Start turning your ideas into reality.
            </h3>
            <p className="font-medium text-[20px] text-[#E9D7FE]">
              Create a free account and get full access to all features for
              30-days. No credit card needed. Trusted by over 4,000
              professionals.
            </p>
          </div>
        </section>
      </div>

      <div className="h-full lg:w-[30%] w-full bg-white flex flex-col items-center lg:justify-center justify-normal py-[30px]">
        <section className="w-[360px] flex flex-col lg:gap-[60px] gap-[30px]">
          <h3 className="font-semibold text-[#101828] text-3xl">Sign up</h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <InputField
                id="username-input"
                htmlFor="name"
                label="Firstname*"
                name="first-name"
                type="text"
                placeholder="Enter your first name"
                value={firstname}
                onChange={(firstname) => {
                  setFirstname(firstname as string),
                    firstname.length > 1
                      ? setDisabled(false)
                      : setDisabled(true);
                }}
              />
            </div>

            <div>
              <InputField
                id="username-input"
                htmlFor="name"
                label="Lastame*"
                name="last-name"
                type="text"
                placeholder="Enter your last name"
                value={lastname}
                onChange={(userlastname) => {
                  setLastname(userlastname as string),
                    userlastname.length > 1
                      ? setDisabled(false)
                      : setDisabled(true);
                }}
              />
            </div>

            <div>
              <InputField
                onChange={(useremail) => {
                  setEmail(useremail as string),
                    useremail.length > 1
                      ? setDisabled(false)
                      : setDisabled(true);
                }}
                id="email-input"
                htmlFor="name"
                label="Email*"
                name="email"
                type="email"
                value={email}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="Enter your email address"
              />
            </div>

            <div className="flex flex-col gap-[6px]">
              <InputField
                id="password-input"
                htmlFor="email"
                label="Password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={password}
                onChange={(userpassword) => {
                  setPassword(userpassword as string),
                    userpassword.length > 1
                      ? setDisabled(false)
                      : setDisabled(true);
                }}
              />
              <p className="font-normal text-sm text-[#475467]">
                Passwords must have at least one uppercase (A-Z) and one digit
                (0-1)
              </p>
            </div>

            <button
              disabled={Disabled}
              type="submit"
              id="submit-button"
              className="
                lg:w-[360px] w-full h-12 mt-[4px] flex items-center justify-center rounded-md cursor-pointer bg-[#27779B] border-[#27779B] text-center ease-linear duration-100 font-medium"
            >
              {isLoading ? (
                <span className="flex items-center gap-2 text-base font-semibold text-white">
                  Signing up <Loader size="sm" />
                </span>
              ) : (
                <span className="text-base font-semibold text-white">
                  Sign up
                </span>
              )}
            </button>
          </form>
          <div className="flex items-center justify-center gap-1">
            <p className="font-normal text-sm text-[#475467]">
              Don&apos;t have an account?
            </p>
            <p className="text-sm font-semibold text-[#27779B]">
              <Link href="/">Sign in</Link>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};
export default UserSignUp;
