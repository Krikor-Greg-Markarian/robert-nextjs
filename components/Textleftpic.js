import React from 'react'

function Textleftpic(props) {
    return (
        <div className = "pt-20">
            <div className = "container mx-auto">
                <div>
                    <p>{props.title}</p>
                </div>
                <div>
                    <div className = "grid grid-cols-2">
                        <div className = "image"></div>
                        <div>
                        <div>{props.title}</div>
                        <div className = "pt-6 pb-20">{props.title}</div>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Textleftpic
