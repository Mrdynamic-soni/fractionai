"use client";
import { theme } from "@/util/theme";
import React from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const ProftLoss = () => {
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
    <div
      className="rounded-2xl p-5 mt-5 self-start w-max"
      style={{
        backgroundColor: theme.surface.primary,
      }}
    >
      <p className="text-sm font-medium text-slate-50">Profit & Loss</p>
      <p className="text-3xl font-bold text-slate-50 pt-2">$682.5</p>
      <div className="flex space-x-1 items-center pt-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="14" height="14" rx="7" fill="#ED8936" />
          <g clip-path="url(#clip0_1_477)">
            <path
              d="M5.12501 8.425L3.52085 6.82083C3.3421 6.64208 3.05793 6.64208 2.87918 6.82083C2.70043 6.99958 2.70043 7.28375 2.87918 7.4625L4.7996 9.38291C4.97835 9.56166 5.2671 9.56166 5.44585 9.38291L10.3042 4.52916C10.4829 4.35041 10.4829 4.06625 10.3042 3.8875C10.1254 3.70875 9.84126 3.70875 9.66251 3.8875L5.12501 8.425Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_477">
              <rect
                width="11"
                height="11"
                fill="white"
                transform="translate(1 1)"
              />
            </clipPath>
          </defs>
        </svg>
        <p className="text-sm font-bold text-orange-400">On track</p>
      </div>
      <ApexCharts
        options={options}
        series={series}
        type="area"
        width="100%"
        height="130"
      />
    </div>
  );
};

export default ProftLoss;
