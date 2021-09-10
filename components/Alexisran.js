import React from "react";

function Alexisran(props) {
  return (
    <div className=" border-b-2 container mx-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className = " p-20 ">
            <div className="alexisran rounded-full"></div>
            </div>
          </div>

          <div>
            <div className="font-bold pt-24">{props.name}</div>
            <div className="text-gray-500 pt-5 text-sm">{props.position}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alexisran;
