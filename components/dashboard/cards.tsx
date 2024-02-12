"use client";
import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
interface Idetails {
  name: string;
  post: string;
  image: string;
  header: string;
  weeks: string;
  detail: string;
}
export const AvailableCourses = () => {
  const details: Idetails[] = [
    {
      name: "Oketola Samuel",
      post: "Tutor",
      image: "/webdev.svg",
      header: "Web Development",
      weeks: "3 weeks",
      detail:
        "ive into the world of coding and design as we explore the fundamentals of web development. From HTML to CSS, JavaScript, and beyond, this course offers a hands-on journey to master the skills needed to build responsive and dynamic websites.",
    },
    {
      name: "Isaac Folarin",
      image: "/mobile.svg",
      post: "Tutor",
      header: "Mobile Engineering",
      weeks: "4 weeks",
      detail:
        "Mobile Engineering: Explore the dynamic world of designing and developing applications for mobile platforms. Delve into the fundamentals of iOS and Android app development, user interface design, and performance optimization",
    },

    {
      name: "Ayele Aduragbemi",
      image: "/webdev.svg",
      post: "Tutor",
      header: "Digital marketter",
      weeks: "3 weeks",
      detail:
        " Digital Marketing: Unleash the power of the digital landscape with our comprehensive course. Dive into the strategies and tools essential for effective online brand promotion, social media engagement, and search engine optimization ",
    },

    {
      name: "Muhammed Olamilekan",
      image: "/mobile.svg",
      post: "Tutor",
      header: "Product Design",
      weeks: "4 weeks",
      detail:
        " Product Design: Ignite your creativity and technical prowess in our Product Design course. From ideation to prototyping, learn the principles of user-centered design and innovation. Dive into hands-on projects to refine your skills in creating products that seamlessly blend form and function ",
    },
  ];

  return (
    <section className="flex flex-col gap-8 pt-[40px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
        {details.map((item, _index) => (
          <section key={_index} className="">
            <div
              style={{ backgroundImage: `url(${item.image})` }}
              className=" flex flex-col justify-end h-[300px] bg-no-repeat bg-cover object-cover"
            >
              <div className="w-full backdrop-blur-md bg-[#F5F5F5]/50 p-[24px] h-[88px] flex flex-col justify-end">
                <section className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm text-white">
                      {item.name}
                    </h3>
                    <p className="font-semibold text-sm text-white">
                      {item.post}
                    </p>
                  </div>
                  <h3 className="text-[#BA20FE] font-semibold text-sm">
                    {item.weeks}
                  </h3>
                </section>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-[32px]">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-2xl text-[#101828]">
                  {item.header}
                </h3>
                <p className="max-w-[500px] font-normal text-sm text-[#475467]">
                  {item.detail}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-semibold text-base text-[#6941C6]">
                  Register
                </p>
                <MdArrowOutward color="#6941C6" />
              </div>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};
