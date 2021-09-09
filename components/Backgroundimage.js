import React from 'react'

function Backgroundimage(props) {
    return (
        <div className = "relative">
            <div className = "hikingimage">
                {props.children}
            </div>
        </div>
    )
}

export default Backgroundimage
