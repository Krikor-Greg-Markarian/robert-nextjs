import React from "react";

function Smallboximgtext(props) {
  return (
    <div class="flex pt-12 ">
      <div class="flex-shrink w-28 h-16">
        <div className="instapics2"></div>
      </div>
      <div class="flex-shrink w-64 h-16">
        <p className="text-sm">
          {props.text} {props.text2} {props.text3} {props.text4}
        </p>

        <p className="text-gray-500 text-sm pt-2">
          {props.fashion}
          {props.fashion2}
          {props.fashion3}
          {props.fashion4}
        </p>
      </div>
    </div>
  );
}

export default Smallboximgtext;
