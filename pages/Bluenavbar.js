import React from "react";
import { FaSearch, FaCommentDots } from "react-icons/fa";
import Link from 'next/link'


function Bluenavbar() {
  return (
    <div>
     
      <div className="bg-blue-500 p-4 ">
        <div className="container mx-auto ">
          <div className="flex justify-start items-center">
            <p className="text-white italic">Robert</p>

            <div className="pl-8">
              <ul>
                <li className="text-white inline ml-12">
                 <Link href="Home"><a>Home</a></Link>
                </li>
                <li className="text-white inline ml-5">
                  <a href="#">About me</a>
                </li>
                <li className="text-white inline ml-5">
                  <a href="#">Skills</a>
                </li>
                <li className="text-white inline ml-5">
                  <a href="#">Resume</a>
                </li>
                <li className="text-white inline ml-5">
                  <a href="#">Services</a>
                </li>
                <li className="text-white inline ml-5">
                  <a href="#">Portfolio</a>
                </li>
                <li className="text-white inline ml-5">
                  <a href="#">Team</a>
                </li>
                <li className="text-white inline ml-5">
                  <a href="#">Hire me</a>
                </li>
              </ul>
            </div>
            <div className="text-white ml-3">
              <div className="ml-2">
                <FaSearch className="inline ml-2" />
                <FaCommentDots className="inline ml-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bluenavbar;
