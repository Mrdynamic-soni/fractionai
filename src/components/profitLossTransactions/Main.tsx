"use client";

import React from "react";
import ProftLoss from "./ProftLoss";
import YourTransfers from "./YourTransfers";
import TotalSaves from "./TotalSaves";
import Earning from "../clientsEndEarnings/Earning";
import NewClients from "../newClients/NewClients";
import Trial from "../trial/Trial";
import YourTransacrtions from "../yourTransactions/YourTransacrtions";

const Main = () => {
  return (
    <div className=" w-10/12">
      <p className=" text-xs text-slate-300">Dashboard / Overview</p>
      <div className="flex items-center justify-between space-x-5 flex-wrap">
        <ProftLoss />
        <YourTransfers />
        <TotalSaves />
      </div>
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <div className="flex flex-wrap justify-start space-x-10">
            <Earning />
            <NewClients />
          </div>
          <Trial />
        </div>
        <YourTransacrtions />
      </div>
    </div>
  );
};

export default Main;
