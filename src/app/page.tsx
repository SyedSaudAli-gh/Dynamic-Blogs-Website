import React from "react";
import News from "./components/news";
import Entertainment from "./components/entertainment";
import Sport from "./components/sport";

function Page() {
  return (
    <div className="w-auto h-auto">
      {/* Header */}
      <div className="h-auto mt-5 flex flex-col lg:flex-row gap-5 items-center text-[#0e1c40] px-4 sm:px-6 md:px-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold font-serif text-center lg:text-left">
          The House of Blogs
        </h1>
        <span className="hidden lg:block h-[100px] rounded-full border-2 border-black"></span>
        <div className="flex flex-col text-sm sm:text-md font-bold text-center lg:text-left">
          <h1>News,</h1>
          <h1>Sport,</h1>
          <h1>Entertainment,</h1>
          <h1>Blog</h1>
        </div>
      </div>

      {/* Sections */}
      <div className="px-4 sm:px-6 md:px-10">
        <News />
        <Entertainment />
        <Sport />
      </div>
    </div>
  );
}

export default Page;
