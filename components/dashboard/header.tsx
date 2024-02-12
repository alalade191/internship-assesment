"use client";
import { useDisclosure } from "@mantine/hooks";
import { HambergerMenu } from "iconsax-react";
import React from "react";
import UserDrawer from "../drawer";

export const DashboardHeader = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <section className="flex flex-col gap-6">
      <div className=" lg:hidden h-[50px] flex items-start justify-start fixed inset-0  z-[9999] backdrop-blur-md bg-[#F5F5F5]/50 p-3 w-full border border-[#D0D5DD]">
        <div onClick={open}>
          <HambergerMenu size="32" />
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-10 lg:mt-0">
        <h3 className="font-semibold text-[30px] text-[#101828]">
          Welcome Olivia
        </h3>
        <p className="text-semibold text-sm text-[#475467]">
          View a list of all available courses on the platform
        </p>
      </div>
      <UserDrawer opened={opened} close={close} />
    </section>
  );
};
