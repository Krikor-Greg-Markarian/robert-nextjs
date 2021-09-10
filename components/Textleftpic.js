import React from 'react'

function Textleftpic(props) {
    return (
        <div className = "pt-20">
            <div className = "container mx-auto">
                <div>
                    <p className = "text-gray-500 pb-4">{props.title}</p>
                </div>
                <div>
                    <div className = "grid grid-cols-2">
                        <div className = "pt-2 pr-12">
                        <div className = "image"></div>
                        </div>
                        <div>
                        <div className = "text-gray-500 ">{props.title}</div>
                        <div className = "pt-6 pb-40 text-gray-500">{props.title}</div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Textleftpic
