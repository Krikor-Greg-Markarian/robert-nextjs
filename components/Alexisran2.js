import React from 'react'

function Alexisran(props) {
    return (
        <div className = "pt-20 border-b-2 container mx-auto pb-20">
            <div className = "container mx-auto">
                <div className = "grid grid-cols-2">
                    <div className = "col-span-1">
                        <div className = "alexisran rounded-full "></div>
                        
                       
                    </div>

                    <div>
                    <div className = "font-bold">{props.name} {props.name2}March 15,2016</div>
                    <div className = "text-gray-500 pt-5 text-sm">{props.position} {props.position2}</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alexisran
