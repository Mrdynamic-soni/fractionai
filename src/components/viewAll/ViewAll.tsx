"use CLient";

import React from "react";

const ViewAll = ({onPress=()=>{}}) => {
  return (
    <div className="flex justify-end items-center space-x-2  self-end cursor-pointer" onClick={onPress}>
      <p className="text-lg font-bold text-slate-900">View All</p>
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.37114e-07 7L14.17 7L10.59 10.59L12 12L18 6L12 -5.24537e-07L10.59 1.41L14.17 5L6.11959e-07 5L4.37114e-07 7Z"
          fill="#322659"
        />
      </svg>
    </div>
  );
};


export default ViewAll;