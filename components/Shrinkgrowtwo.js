import React from "react";

function Shrinkgrowtwo(props) {
  return (
    <div className="">
      <div class="flex container mx-auto pt-10 ">
        <div class="flex-shrink w-20 h-20 pt-4">
          <div className="alexisran rounded-full"></div>
        </div>
        <div class="flex-grow w-64 h-16">
          <p className="font-bold">
            {props.name3}
            {props.name4}

            <span className="text-gray-500 font-normal ml-8">
              March 15, 2016
            </span>

            <p className="float-right text-gray-500 font-normal">REPLY</p>
          </p>
          <p className="pt-3 text-sm">
            {props.position3}
            {props.position4}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shrinkgrowtwo;
