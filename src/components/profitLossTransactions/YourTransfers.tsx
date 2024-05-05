"use client";

import React from "react";
import AmountTransferTile from "../amountTransferTile/AmountTransferTile";
import { USER } from "@/assests/imageContstant";
import ViewAll from "../viewAll/ViewAll";

const debiCredit = [
  {
    id: 0,
    iconImage: USER,
    amount: 50,
    type: "credit",
    timestamp: "1714887112711",
    name: "Alex Manda",
  },
  {
    id: 1,
    iconImage: USER,
    amount: 50,
    type: "debit",
    timestamp: "1714887110711",
    name: "Laura Santos",
  },
];

const YourTransfers = () => {
  return (
    <div className="p-5 m-5 w-max " >
      <p className="text-2xl font-bold"> Your Transfers</p>
      <div>
        {debiCredit.map((item) => {
          return (
            <AmountTransferTile
              key={item?.id}
              iconImage={item?.iconImage}
              amount={item?.amount}
              type={item?.type}
              timestamp={item?.timestamp}
              name={item?.name}
            />
          );
        })}
      </div>
      <ViewAll/>
    </div>
  );
};

export default YourTransfers;
