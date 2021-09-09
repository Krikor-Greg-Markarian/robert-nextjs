import React from "react";
import { FaSearch,FaCommentDots } from "react-icons/fa";

function Bluenavbar() {
  return (
    <div>
      <div className = "bg-blue-500">


        <div className = "container mx-auto">
            <div className = "pt-3 pb-3 inline">
            
            
            
            <div className = "">
            <ul className = "">
                <li className = "text-white inline ml-3"><a href="#">Home</a></li>
                <li className = "text-white inline ml-3"><a href="#">About me </a></li>
                <li className = "text-white inline ml-3"><a href="#">Skills</a></li>
                <li className = "text-white inline ml-3"><a href="#">Resource</a></li>
                <li className = "text-white inline ml-3"><a href="#">Services</a></li>
                <li className = "text-white inline ml-3"><a href="#">Portfolio</a></li>
                <li className = "text-white inline ml-3"><a href="#">Team</a></li>
                <li className = "text-white inline ml-3"><a href="#">Hire me</a></li>
            </ul>
            </div>
            </div>

            <div>
                <FaSearch className = "text-white inline"/>
                <FaCommentDots className = "text-white inline ml-3"/>
            </div>
        </div>



      </div>
    </div>
  );
}

export default Bluenavbar;
