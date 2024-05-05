"use Client";
import React from "react";
import ViewAll from "../viewAll/ViewAll";
import TransactionTile from "./TransactionTile";

const YourTransacrtions = () => {
  const transactionDetails = [
    {
      id: 0,
      svgIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_574)">
            <path
              d="M12 2C7.58 2 4 2.5 4 6V16C4 16.88 4.39 17.67 5 18.22V20C5 20.55 5.45 21 6 21H7C7.55 21 8 20.55 8 20V19H16V20C16 20.55 16.45 21 17 21H18C18.55 21 19 20.55 19 20V18.22C19.61 17.67 20 16.88 20 16V6C20 2.5 16.42 2 12 2ZM17.66 4.99H6.34C6.89 4.46 8.31 4 12 4C15.69 4 17.11 4.46 17.66 4.99ZM18 6.99V10H6V6.99H18ZM17.66 16.73L17.37 17H6.63L6.34 16.73C6.21 16.62 6 16.37 6 16V12H18V16C18 16.37 17.79 16.62 17.66 16.73Z"
              fill="#322659"
            />
            <path
              d="M8.5 16C9.32843 16 10 15.3284 10 14.5C10 13.6716 9.32843 13 8.5 13C7.67157 13 7 13.6716 7 14.5C7 15.3284 7.67157 16 8.5 16Z"
              fill="#322659"
            />
            <path
              d="M15.5 16C16.3284 16 17 15.3284 17 14.5C17 13.6716 16.3284 13 15.5 13C14.6716 13 14 13.6716 14 14.5C14 15.3284 14.6716 16 15.5 16Z"
              fill="#322659"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_574">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      transactionName: "Public Transport",
      dateTimeStamp: "20 sept 2020",
    },
    {
      id: 1,
      svgIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_581)">
            <path
              d="M22 9H17.21L12.83 2.44C12.64 2.16 12.32 2.02 12 2.02C11.68 2.02 11.36 2.16 11.17 2.45L6.79 9H2C1.45 9 1 9.45 1 10C1 10.09 1.01 10.18 1.04 10.27L3.58 19.54C3.81 20.38 4.58 21 5.5 21H18.5C19.42 21 20.19 20.38 20.43 19.54L22.97 10.27L23 10C23 9.45 22.55 9 22 9ZM12 4.8L14.8 9H9.2L12 4.8ZM18.5 19L5.51 19.01L3.31 11H20.7L18.5 19ZM12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13Z"
              fill="#05CD99"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_581">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      transactionName: "Online Bookings",
      dateTimeStamp: "30 Aug 2020",
    },
    {
      id: 2,
      svgIcon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_588)">
            <path
              d="M4 6H20V8H4V6ZM6 2H18V4H6V2ZM20 10H4C2.9 10 2 10.9 2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12C22 10.9 21.1 10 20 10ZM20 20H4V12H20V20ZM10 12.73V19.26L16 16L10 12.73Z"
              fill="#ED8936"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_588">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
      transactionName: "Grocery Store",
      dateTimeStamp: "1 sept 2020",
    },
  ];

  return (
    <div className="rounded-2xl p-10 mt-5 self-start w-5/12  bg-slate-50">
      <p className="text-2xl font-bold p-5"> Your transactions</p>
      <div className="px-5">
        {transactionDetails.map((item) => {
          return (
            <TransactionTile
              key={item?.id}
              svgIcon={item?.svgIcon}
              transactionName={item?.transactionName}
              dateTimeStamp={item?.dateTimeStamp}
            />
          );
        })}
      </div>
      <ViewAll />
    </div>
  );
};

export default YourTransacrtions;
