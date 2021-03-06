import React from 'react'
import { FaFacebook, FaTwitter, FaGooglePlusG,FaFacebookMessenger,  } from 'react-icons/fa'
import { IoIosArrowRoundForward } from "react-icons/io";

function Howtoask(props) {
    const hikingimage3 = props.hikingimage3;
    const hikingimage4 = props.hikingimage4;
    const hikingimage5 = props.hikingimage5;
    const hikingimage6 = props.hikingimage6;
    
    
    
    return (

        
        <div className = "bg-white mb-8">

            <div style = {{backgroundImage: `url("${hikingimage3}")`}}  
            

            className = "hikingimage3 rounded-t-lg p-6">
                <button className = "bg-blue-500 p-2 text-white rounded-lg">{props.button}{props.button2}{props.button3}{props.button4}</button>
            </div>
            <div className = "p-6">
            <p className = "text-gray-500 text-sm font-bold">{props.date}</p>
            <p className = "pt-1 font-bold">{props.title}</p>
            <p className = "text-sm text-gray-500 pt-4 pb-6">{props.subtitle} <IoIosArrowRoundForward className = "inline ml-12 text-2xl"/></p>
           
           <div>
            <p className = "text-gray-500 text-sm inline">{props.author} 
            <div className = "inline float-right"><FaFacebook className = "inline"/>
            <FaTwitter className = "inline ml-3"/>
            <FaGooglePlusG className = "inline ml-3"/>
            <p className = "text-sm inline ml-2 font-bold text-gray-400">25</p>
            <FaFacebookMessenger className = "inline ml-1"/>
            </div> </p>
            
            </div>
           
            </div>
            
        </div>






    )
}

export default Howtoask
