"use Client";
import React from "react";

const NewClients = () => {
  return (
    <div className="flex justify-start items-center space-x-5 py-4 px-5 bg-slate-50 w-max rounded-2xl mt-7">
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" fill="url(#paint0_linear_1_539)" />
        <g clip-path="url(#clip0_1_539)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.4483 29.3183C35.0467 30.4033 36.1667 31.8733 36.1667 33.8333V37.3333H39.6667C40.3083 37.3333 40.8333 36.8083 40.8333 36.1667V33.8333C40.8333 31.29 36.6683 29.785 33.4483 29.3183Z"
            fill="#F7FAFC"
          />
          <path
            d="M24.5 28C27.0773 28 29.1667 25.9106 29.1667 23.3333C29.1667 20.756 27.0773 18.6667 24.5 18.6667C21.9227 18.6667 19.8333 20.756 19.8333 23.3333C19.8333 25.9106 21.9227 28 24.5 28Z"
            fill="#F7FAFC"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.5 28C34.0783 28 36.1667 25.9117 36.1667 23.3333C36.1667 20.755 34.0783 18.6667 31.5 18.6667C30.9517 18.6667 30.4383 18.7833 29.9483 18.9467C30.9167 20.1483 31.5 21.6767 31.5 23.3333C31.5 24.99 30.9167 26.5183 29.9483 27.72C30.4383 27.8833 30.9517 28 31.5 28Z"
            fill="#F7FAFC"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M24.5 29.1666C21.385 29.1666 15.1667 30.73 15.1667 33.8333V36.1666C15.1667 36.8083 15.6917 37.3333 16.3333 37.3333H32.6667C33.3083 37.3333 33.8333 36.8083 33.8333 36.1666V33.8333C33.8333 30.73 27.615 29.1666 24.5 29.1666Z"
            fill="#F7FAFC"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_539"
            x1="0"
            y1="0"
            x2="56"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#322659" />
            <stop offset="1" stop-color="#4318FF" />
          </linearGradient>
          <clipPath id="clip0_1_539">
            <rect
              width="28"
              height="28"
              fill="white"
              transform="translate(14 14)"
            />
          </clipPath>
        </defs>
      </svg>

      <div>
        <p className="text-sm font-semibold text-slate-700">New Clients</p>
        <p className="text-2xl font-bold">321</p>
      </div>
      <svg
        width="62"
        height="32"
        viewBox="0 0 62 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 29.7041C2 29.7041 8.14585 31.4949 14.2916 29.7041C28.6144 25.5305 24 -0.999996 35 6C48.1784 14.3863 58.6562 13.9388 60.5 2"
          stroke="url(#paint0_linear_1_542)"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_542"
            x1="-35"
            y1="38"
            x2="48.5597"
            y2="-12.866"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#322659" />
            <stop offset="1" stop-color="#4F2CFF" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default NewClients;
