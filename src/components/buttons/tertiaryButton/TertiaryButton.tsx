"use client"


import { theme } from "@/util/theme";
import React from "react";

const TertiaryButton = ({ buttonText, onPress, leftIcon, rightIcon }) => {
  return (
    <button className="flex justify-center items-center space-x-2 px-5 py-2 "  onClick={onPress}>
      {leftIcon}
      <p className="text-slate-600 text-xs">
      {buttonText}
      </p>
      {rightIcon}
    </button>
  );
};

export default TertiaryButton;
