import React from "react";

function Relatedposts(props) {
  return (
    <div>
      <div className="pt-12">
        
            <div className="relatedposts relative">
              <div className="absolute -bottom-3 -right-3">
                
                <div className="bg-white w-60 p-2 h-32 font-bold">
                  <div className = "flex justify-end items-center pt-2">
                    <button className = "bg-blue-500 p-1 text-white ">{props.music}{props.musictwo}</button>
                  </div>
                  <div className = "pt-2">
                  {props.something}{props.somethingtwo}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
  );
}

export default Relatedposts;
