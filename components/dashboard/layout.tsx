"use client";
import { HomeTrendDown, Setting2 } from "iconsax-react";
import React from "react";
import { MdOutlineInsertChart } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { CgSupport } from "react-icons/cg";
import { Icon } from "../Icon";
import Search from "../SearchBar";
import { Avatar, clsx } from "@mantine/core";
import { LuLogOut } from "react-icons/lu";
import { DashboardHeader } from "./header";
import { usePathname } from "next/navigation";

interface Isidebar {
  route: string;
  link: string;
  icon: React.ReactNode;
}
export const Dashboardlayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathName = usePathname();

  const sideBar: Isidebar[] = [
    {
      route: "home",
      link: "/dashboard",
      icon: <HomeTrendDown size={24} color="#667085" />,
    },
    {
      route: "Courses",
      link: "/courses",
      icon: <MdOutlineInsertChart size={24} />,
    },
    {
      route: "Class",
      link: "/class",
      icon: <FiLayers size={24} color="#667085" />,
    },
    {
      route: "Project",
      link: "/project",
      icon: <Icon />,
    },
  ];

  const sideBar2: Isidebar[] = [
    {
      route: "Support",
      link: "/support",
      icon: <CgSupport size={24} color="#667085" />,
    },
    {
      route: "Route",
      link: "/route",
      icon: <Setting2 size={24} color="#667085" />,
    },
  ];
  return (
    <div className="flex h-screen w-full bg-white">
      <div className="h-full hidden w-[220px] lg:flex flex-col items-center justify-between py-[32px] border border-l border-[]">
        <section className="flex flex-col gap-3 ">
          <div className=" pb-[20px]">
            <Search />
          </div>
          {sideBar.map((list, _index) => (
            <div
              key={_index}
              className={clsx(
                pathName === list.link
                  ? "flex items-center  bg-[#BCEED9] gap-3 font-semibold rounded-lg text-base py-[9px] px-[15px] w-[200px] text-[#344054]"
                  : "flex items-center  gap-3 font-semibold text-base py-[9px] px-[15px] w-[200px] text-[#344054]"
              )}
            >
              <span
                className={clsx(
                  pathName === list.link ? "text-[#049B77]" : "text-[#667085]"
                )}
              >
                {list.icon}
              </span>
              <span>{list.route}</span>
            </div>
          ))}
        </section>
        <section className="flex flex-col gap-3">
          {sideBar2.map((list, _index) => (
            <div
              key={_index}
              className={clsx(
                pathName === list.link
                  ? "flex items-center  bg-[#BCEED9] gap-3 font-semibold rounded-lg text-base py-[9px] px-[15px] w-[200px] text-[#344054]"
                  : "flex items-center  gap-3 font-semibold text-base py-[9px] px-[15px] w-[200px] text-[#344054]"
              )}
            >
              <span>{list.icon}</span>
              <span>{list.route}</span>
            </div>
          ))}
          <div className="h-[1px] w-full bg-[#EAECF0]"></div>
          <section className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <Avatar src="/user.svg" alt="it's me" />
              <div className="flex flex-col gap-[1px]">
                <h4 className="font-semibold text-sm text-[#344054]">
                  Olivia Rhye
                </h4>
                <p className="font-normal text-sm text-[#475467]">
                  olivia@gmail.com
                </p>
              </div>
            </div>
            <LuLogOut color="#667085" className="cursor-pointer" />
          </section>
        </section>
      </div>
      <div className="h-full flex-1 overflow-y-auto scrollBar lg:py-8 lg:pl-8 lg:pr-[100px] p-8">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};
