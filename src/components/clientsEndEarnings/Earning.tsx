"use Client";
import React from "react";

const Earning = () => {
  return (
    <div className="flex justify-start items-center space-x-10 py-4 px-5 bg-slate-50 w-max rounded-2xl mt-7">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" fill="#F4F7FE" />
        <g clip-path="url(#clip0_1_533)">
          <path
            d="M20.2841 24.3135H20.5578C21.6115 24.3135 22.4736 25.1756 22.4736 26.2293V35.8081C22.4736 36.8618 21.6115 37.7239 20.5578 37.7239H20.2841C19.2305 37.7239 18.3684 36.8618 18.3684 35.8081V26.2293C18.3684 25.1756 19.2305 24.3135 20.2841 24.3135V24.3135ZM27.9472 18.5663C29.0009 18.5663 29.863 19.4284 29.863 20.482V35.8081C29.863 36.8618 29.0009 37.7239 27.9472 37.7239C26.8935 37.7239 26.0314 36.8618 26.0314 35.8081V20.482C26.0314 19.4284 26.8935 18.5663 27.9472 18.5663ZM35.6103 29.5135C36.6639 29.5135 37.526 30.3756 37.526 31.4292V35.8081C37.526 36.8618 36.6639 37.7239 35.6103 37.7239C34.5566 37.7239 33.6945 36.8618 33.6945 35.8081V31.4292C33.6945 30.3756 34.5566 29.5135 35.6103 29.5135V29.5135Z"
            fill="#ED8936"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_533">
            <rect
              width="32.8417"
              height="32.8417"
              fill="white"
              transform="translate(11.5264 11.7242)"
            />
          </clipPath>
        </defs>
      </svg>
      <div>
        <p className="text-sm font-semibold text-slate-700">Earnings</p>
        <p className="text-2xl font-bold">$350.40</p>
      </div>
    </div>
  );
};

export default Earning