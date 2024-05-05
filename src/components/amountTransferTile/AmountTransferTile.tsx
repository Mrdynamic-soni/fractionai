"use client";

import moment from "moment";
import Image from "next/image";
import React from "react";

const AmountTransferTile = ({ iconImage, amount, type, timestamp, name }) => {
  return (
    <div className="flex justify-between items-center my-7  space-x-10">
      <div className=" flex justify-between items-center space-x-10">
      <Image
        src={iconImage}
        width={50}
        height={50}
        alt="user"
        className="rounded-full"
      />
      <div>
        <p className="text-lg font-semibold text-slate-950">{`${type === "debit" ? "From" : "To"} ${name}`}</p>
        <p className="text-md font-semibold text-slate-600">{moment(timestamp).calendar()}</p>
      </div>
      </div>
      <div className="px-4 py-2 bg-orange-100 rounded-lg">
        <p className="text-lg text-orange-400 font-bold">{`${type === "debit" ? "-" : "+"} $${amount}`}</p>
      </div>
    </div>
  );
};

export default AmountTransferTile
