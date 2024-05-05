"use client";

import React from "react";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import { USER } from "@/assests/imageContstant";
import Image from "next/image";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between align-center space-x-1 flex-wrap w-full">
      <p className="text-3xl font-black uppercase">Dashboard</p>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-3 h-3 text-gray-500 dark:text-gray-900"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="pl-10 pr-3 py-2 rounded-full text-xs"
          placeholder="Search Dashboard"
        />
      </div>

      <div className="flex justify-between items-center space-x-2">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 20C11.1 20 12 19.1 12 18H8C8 19.1 8.9 20 10 20ZM16 14V9C16 5.93 14.37 3.36 11.5 2.68V2C11.5 1.17 10.83 0.5 10 0.5C9.17 0.5 8.5 1.17 8.5 2V2.68C5.64 3.36 4 5.92 4 9V14L2 16V17H18V16L16 14ZM14 15H6V9C6 6.52 7.51 4.5 10 4.5C12.49 4.5 14 6.52 14 9V15ZM5.58 2.08L4.15 0.65C1.75 2.48 0.169999 5.3 0.0299988 8.5H2.03C2.10084 7.23181 2.45683 5.99593 3.07147 4.88439C3.68611 3.77284 4.54357 2.81425 5.58 2.08ZM17.97 8.5H19.97C19.82 5.3 18.24 2.48 15.85 0.65L14.43 2.08C15.462 2.81787 16.3156 3.77751 16.9282 4.88846C17.5408 5.99942 17.8968 7.23347 17.97 8.5Z"
              fill="#1A202C"
            />
          </svg>
        </div>
        <PrimaryButton
          buttonText={"Import"}
          rightIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.58065 0 0 3.58065 0 8C0 12.4194 3.58065 16 8 16C12.4194 16 16 12.4194 16 8C16 3.58065 12.4194 0 8 0ZM8 14.4516C4.43548 14.4516 1.54839 11.5645 1.54839 8C1.54839 4.43548 4.43548 1.54839 8 1.54839C11.5645 1.54839 14.4516 4.43548 14.4516 8C14.4516 11.5645 11.5645 14.4516 8 14.4516ZM6.96774 4.25806V8H4.80645C4.46129 8 4.29032 8.41613 4.53226 8.66129L7.72581 11.8548C7.87742 12.0065 8.12258 12.0065 8.27419 11.8548L11.4677 8.66129C11.7129 8.41613 11.5387 8 11.1935 8H9.03226V4.25806C9.03226 4.04516 8.85806 3.87097 8.64516 3.87097H7.35484C7.14194 3.87097 6.96774 4.04516 6.96774 4.25806Z"
                fill="#EDF2F7"
              />
            </svg>
          }
          leftIcon={""}
          onPress={() => {}}
        />
        <div className="relative">
          <div
            style={{
              height: "0.5rem",
              width: "0.5rem",
              backgroundColor: "green",
              position: "absolute",
              bottom: 0,
              right: 0,
              borderRadius: "99999px",
              border: "2px solid #fff",
            }}
          />
          <Image src={USER} alt="user" width={40} height={40} />
        </div>
      </div>
    </div>
  );
};
export default DashboardHeader;
