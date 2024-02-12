"use client";
import { SearchNormal1 } from "iconsax-react";
import React from "react";
import { MdOutlineFilterList } from "react-icons/md";

export const Heading = () => {
  return (
    <section className="lg:flex items-center space-y-4 justify-between border-b border-[#D0D5DD] pb-[16px] lg:pt-[60px] pt-[30px]">
      <div className="flex items-center border-[2px] border-[#D0D5DD] rounded-lg w-fit">
        <h3 className="font-semibold text-sm text-[#1D2939] py-[10px] px-4 border-r-[2px] border-[#D0D5DD] cursor-pointer">
          View all
        </h3>
        <h3 className="font-semibold text-[#344054] text-sm py-[10px] px-4 border-r-[2px] border-[#D0D5DD]  cursor-pointer">
          Free
        </h3>
        <h3 className="font-semibold text-[#344054] text-sm py-[10px] px-4  cursor-pointer">
          Paid
        </h3>
      </div>
      <section className="flex items-center gap-3">
        <div className="flex border-[2px] border-[#D0D5DD] rounded-lg">
          {/* input */}
          <div className="flex items-center gap-2 p-[10px] lg:w-[400px] w-full">
            <SearchNormal1 color="#667085" size={20} />

            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent w-full border-none text-sm font-normal text-[#A1A9B8]"
            />
          </div>
        </div>
        <div className=" flex items-center cursor-pointer gap-3 border-[2px] border-[#D0D5DD] rounded-lg w-fit p-[10px]">
          <MdOutlineFilterList size={20} color="#344054" />
          <p className="font-semibold text-sm text-[#344054]">Filter</p>
        </div>
      </section>
    </section>
  );
};
