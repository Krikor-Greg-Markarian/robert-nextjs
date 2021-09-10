import React from 'react'

function Backgroundimage(props) {
    return (
        <div className = "relative">
            <div className = "hikingimage2">
                {props.children}
                <div className = "container mx-auto">
                    <div className = "pt-12 pl-20">
                    <p className = "text-white text-2xl">Copy if you can:improving your Ui Design <br /> Skills With Copywork </p>
                    <p className = "text-sm text-white pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident vel neque culpa et molestiae rem error commodi deserunt repellat. Corporis ex ipsam tempora magni asperiores, repudiandae alias voluptas veritatis eius?</p>
                    <div className = "pt-4">
                    <button className = "bg-blue-500 px-4 py-1 text-white">Read More</button>
                    </div>
                    </div>
                    

                    
                    </div>
                
            </div>
        </div>
    )
}

export default Backgroundimage
