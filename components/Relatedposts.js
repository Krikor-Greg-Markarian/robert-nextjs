import React from "react";

function Relatedposts(props) {
  return (
    <div>
      <div className="pt-12">
        
            <div className="relatedposts relative">
              <div className="absolute -bottom-3 -right-3">
                
                <div className="bg-white w-60 h-32 font-bold p-4">
                  <div className = "flex justify-end items-center pt-2">
                    <button className = "bg-blue-500 p-1 text-white ">{props.music}{props.musictwo}</button>
                  </div>
                  <div className = "pt-1">
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
