"use client";
import { theme } from "@/util/theme";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { USER } from "@/assests/imageContstant";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalSaves = () => {
  const options = {
    chart: {
      height: 100,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
  };

  const series = [
    {
      name: "Series 1",
      data: [31, 40, 28, 51, 42, 109, 100, 80, 60, 70, 90, 110],
    },
  ];

  return (
    <div className="rounded-2xl p-5 mt-5 self-start w-max bg-slate-50">
      <div className="flex justify-between items-center mb-3">
        <div>
          <p className="text-sm font-medium ">Total saves</p>
          <p className="text-3xl font-bold  pt-2">$682.5</p>
        </div>
        <div>
          <Image
            src={USER}
            alt="user"
            height={50}
            width={50}
            className="rounded-lg"
          />
        </div>
      </div>
      <ApexCharts
        options={options}
        series={series}
        type="area"
        width="100%"
        height="150"
      />
    </div>
  );
};

export default TotalSaves;
