import React from "react";
import { FaSearch,FaCommentDots } from "react-icons/fa";

function Bluenavbar() {
  return (
    <div>
      {/* <div className = "bg-blue-500 ">
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
                  
                <div className = " ">
                <FaSearch className = "inline text-white "/>
                <FaCommentDots className = "inline text-white"/>
                </div>
                
                </ul>
               
              </div>
          </div>
      </div> */}
      <div className = "bg-blue-500 p-4">
      <div className = "container mx-auto">
        <div className = "flex justify-start items-center">
        <div>
          <p className = "text-white italic">Robert</p>
        </div>
        <div className = "pl-8">
          <ul>
            <li className = "text-white inline ml-12"><a href="#">Home</a></li>
            <li className = "text-white inline ml-5"><a href="#">About me</a></li>
            <li className = "text-white inline ml-5"><a href="#">Skills</a></li>
            <li className = "text-white inline ml-5"><a href="#">Resume</a></li>
            <li className = "text-white inline ml-5"><a href="#">Services</a></li>
            <li className = "text-white inline ml-5"><a href="#">Portfolio</a></li>
            <li className = "text-white inline ml-5"><a href="#">Team</a></li>
            <li className = "text-white inline ml-5"><a href="#">Hire me</a></li>
            
          </ul>
        </div>
        <div className = "text-white pl-12">
          <div className = "">
            <FaSearch className = "inline "/>
            <FaCommentDots className = "inline ml-2"/>
          </div>
          
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Bluenavbar;
