"use client";
import DashboardHeader from "@/components/dashboardHeader/DashboardHeader";
import Leftnavbar from "@/components/leftnavbar/LeftnavBar";
import ProfitLossTransactions from "@/components/profitLossTransactions/Main";
import useDeviceType from "@/hooks/useDeviceType";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Dashboard() {
  const deviceType = useDeviceType();
  const [toggleMenu, setToggleMenu] = useState<Boolean>(true);

  useEffect(()=>{
    if(deviceType==="sm"||deviceType==="md"){
      setToggleMenu(false)
    }
  },[deviceType])

  return (
    <div className="flex bg-slate-200">
      {(deviceType === "sm" || deviceType === "md") && <GiHamburgerMenu className="z-10 fixed " onClick={()=>{setToggleMenu(!toggleMenu)}}/>}
      {toggleMenu && <Leftnavbar />}
      <div className="flex flex-1">
        <div className="w-1/5 h-100" />
        <div className="p-10 flex-1 flex  w-4/5 flex-col items-end ">
          <DashboardHeader />
          <ProfitLossTransactions />
        </div>
      </div>
    </div>
  );
}
