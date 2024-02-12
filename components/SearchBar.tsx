"use client";
import React from "react";
import { SearchNormal1 } from "iconsax-react";

const Search = () => {
  return (
    <div className="flex border border-[#D0D5DD] rounded-lg">
      {/* input */}
      <div className="flex items-center justify-between gap-2 p-[10px] lg:w-[200px] w-[140px]">
        <SearchNormal1 color="#667085" size={20} />

        <input
          type="text"
          placeholder="Search"
          className="outline-none bg-transparent lg:w-[150px] w-full border-none text-sm font-normal text-[#A1A9B8]"
        />
      </div>
    </div>
  );
};
export default Search;
