import React from "react";
import blog1 from "../assets/blog1.jpg";
import { FaCircleUser } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="m-2 p-2  bg-white shadow-lg">
        <img src={blog1} alt="blog1" className="w-[900px]" />
        <div className="m-4 p-4 flex">
          <FaCircleUser className="text-4xl" />
          <p className="text-xs ml-2">
            Admin
            <p className="text-xs">Mar 25, 2023 . 1 min read</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
