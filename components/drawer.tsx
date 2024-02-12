"use client";
import { Avatar, Drawer, clsx } from "@mantine/core";
import { HomeTrendDown, Icon, Setting2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CgSupport } from "react-icons/cg";
import { FiLayers } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { MdOutlineInsertChart } from "react-icons/md";
import Search from "./SearchBar";

interface Isidebar {
  route: string;
  link: string;
  icon: React.ReactNode;
}
function UserDrawer({ opened, close }: any) {
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
    <>
      <Drawer
        opened={opened}
        onClose={close}
        overlayProps={{ opacity: 0.2, blur: 2 }}
        size={250}
        position="left"
        withCloseButton={false}
      >
        <div className="h-full w-[220px] lg:flex flex-col items-center justify-between py-[32px]">
          <section className="flex flex-col gap-3 ">
            <div className="py-[20px]">
              <Search />
            </div>
            {sideBar.map((list, _index) => (
              <div
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
      </Drawer>
    </>
  );
}
export default UserDrawer;
