import React from 'react'
import { FaSearch, FaTwitter, FaEnvelopeOpenText,FaPhoneAlt } from 'react-icons/fa';

function Blacknavbar() {
    return (
        <div>
            <div className = "bg-black">
                <div className = "container mx-auto">
                    <div className = "text-white">
                        <FaSearch className = "inline"/>
                        <FaTwitter className = "ml-5 inline"/>
                        <div className = "float-right text-white">
                           
                        <FaEnvelopeOpenText className = "inline"  />
                        <div className = "text-white inline text-sm ml-2">
                        info@matrix.com
                        </div>

                        <FaPhoneAlt className = "inline ml-5"/>
                        <div className = "text-white inline text-sm ml-2">
                        +88 0123456789
                        </div>
                    </div>
                    </div>
                   
                    </div>
            </div>
        </div>
    )
}

export default Blacknavbar
