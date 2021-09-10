import React from "react";

function Shrinkgrow(props) {
  return (
    <div className = "">
      <div class="flex container mx-auto pt-10 ">
        <div class="flex-shrink w-20 h-20 pt-4 ">
          <div className="alexisran rounded-full"></div>
        </div>
        <div class="flex-grow w-64 h-16">
            <p className = "font-bold">{props.name}</p>
          <p className = "pt-2 text-sm">{props.position}
           
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shrinkgrow;
