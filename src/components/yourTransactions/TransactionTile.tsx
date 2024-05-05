"use Client";

import React from "react";

const TransactionTile = ({ svgIcon, transactionName, dateTimeStamp }) => {
  return (
    <div className="flex justfy-start items-center space-x-8 my-5">
      {svgIcon}
      <div>
        <p className="text-md font-bold">{transactionName}</p>
        <p className="text-sm font-medium text-slate-700">{dateTimeStamp}</p>
      </div>
    </div>
  );
};

export default TransactionTile;
