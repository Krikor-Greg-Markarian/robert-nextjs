import React from 'react'
import { FaFacebook, FaTwitter,Fagoogle,FaGofore } from 'react-icons/fa'

function Howtoask(props) {
    return (
        <div className = " pt-2 bg-white">
            <div className = "hikingimage3 rounded-t-lg p-6">
                <button className = "bg-blue-500 p-2 text-white rounded-lg">{props.button}</button>
            </div>
            <div className = "p-6">
            <p>{props.date}</p>
            <p className = "pt-4 font-bold">{props.title}</p>
            <p className = "text-sm text-gray-500 pt-4 pb-6">{props.subtitle}</p>
           
            <p className = "text-gray-500 text-sm">{props.author} </p>
            <div>
                {/* <FaFacebook />
                <FaTwitter />
                <Fagoogle />
                <FaGofore /> */}
                
            
            </div>
            </div>
        </div>
    )
}

export default Howtoask
