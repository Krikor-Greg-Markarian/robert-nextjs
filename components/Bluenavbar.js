import React from "react";
import { FaSearch,FaCommentDots } from "react-icons/fa";

function Bluenavbar() {
  return (
    <div>
      <div className = "bg-blue-500 ">
          <div className = "container mx-auto">
              <div className = "">
                <div className = "flex justify-start items-center">
                <p className = "italic font-bold text-white inline">Robert</p>
                </div>
                <ul className = "inline-block flex justify-center items-center">
                  <li className = "text-white inline ml-3"><a href="#">Home</a></li>
                  <li className = "text-white ml-3 inline"><a href="#">About me</a></li>
                  <li className = "text-white ml-3 inline"><a href="#">Skills</a></li>
                  <li className = "text-white ml-3 inline"><a href="#">Resume</a></li>
                  <li className = "text-white ml-3 inline"><a href="#">Service</a></li>
                  <li className = "text-white ml-3 inline"><a href="#">Portfolio</a></li>
                  <li className = "text-white ml-3 inline"><a href="#">Team</a></li>
                  <li className = "text-white ml-3 inline"><a href="#">Hire me</a></li>
                  
                <div className = "flex justify-end items-end ">
                <FaSearch className = "inline text-white "/>
                <FaCommentDots className = "inline text-white"/>
                </div>
                
                </ul>
               
              </div>
          </div>
      </div>
    </div>
  );
}

export default Bluenavbar;
