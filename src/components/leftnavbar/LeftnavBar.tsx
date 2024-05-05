"use client";

import {
    ACCOUNTING,
  AURORA,
  BANKING,
  DASHBOARD,
  DOCUMENT,
  ORG_IMG,
  PURCHASE,
  REPORT,
  SALES,
} from "@/assests/imageContstant";
import Image from "next/image";
import React, { useState } from "react";
import MenuOption from "../menuOption/MenuOption";

const LeftNavbar = () => {
  const [activeMenu, setActiveMenu] = useState<Number>(0);

  const TopMenuOptions = [
    {
      id: 0,
      label: "Dashboard",
      icon: DASHBOARD,
      onPres: () => {
        setActiveMenu(0);
      },
    },
    {
      id: 1,
      label: "Oganization",
      icon: ORG_IMG,
      onPres: () => {
        setActiveMenu(1);
      },
    },
    {
      id: 2,
      label: "Reports",
      icon: REPORT,
      onPres: () => {
        setActiveMenu(2);
      },
    },
    {
      id: 3,
      label: "Documents",
      icon: DOCUMENT,
      onPres: () => {
        setActiveMenu(3);
      },
    },
  ];

  const bottomMenuOptions = [
    {
      id: 4,
      label: "Sales",
      icon: SALES,
      onPres: () => {
        setActiveMenu(4)
      },
    },
    {
      id: 5,
      label: "Purchase",
      icon: PURCHASE,
      onPres: () => {
        setActiveMenu(5)
      },
    },
    {
      id: 6,
      label: "Accounting",
      icon: ACCOUNTING,
      onPres: () => {
        setActiveMenu(6)
      },
    },
    {
      id: 7,
      label: "Banking",
      icon: BANKING,
      onPres: () => {
        setActiveMenu(7)
      },
    },
  ];
  return (
    <div className="p-5 bg-slate-50 w-1/8  fixed  flex flex-col justify-between " style={{height:'100vh'}} >
     <div>
     <div>
        <Image src={AURORA} width={180} height={100} alt="Aurora" />
      </div>
      <div className="mt-12 " >
        <p className="uppercase font-bold text-xs text-slate-400"> General</p>
        <div className="pl-3">
          {TopMenuOptions.map((item) => {
            return (
              <MenuOption
                activeMenu={activeMenu == item?.id}
                key={item?.id}
                icon={item?.icon}
                label={item?.label}
                onPress={item?.onPres}
                labelClass="font-semibold text-sm text-slate-900"
                imageSize={30}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-5 " style={{marginTop:"3rem"}}>
        <p className="uppercase font-bold text-xs text-slate-400"> management</p>
        <div className="pl-3">
          {bottomMenuOptions.map((item) => {
            return (
              <MenuOption
                activeMenu={activeMenu == item?.id}
                key={item?.id}
                icon={item?.icon}
                label={item?.label}
                onPress={item?.onPres}
                labelClass="font-normal text-xs text-slate-400"
                imageSize={15}
              />
            );
          })}
        </div>
      </div>
     </div>
      <div className="pl-3 mt-5 " >
        <p className="font-normal text-xs text-slate-400">
          2023 © Lucas Marques
        </p>
        <p className="font-normal text-xs text-slate-400">Expire in 09/2023</p>
      </div>
    </div>
  );
};

export default LeftNavbar;
