"use client"


import { theme } from "@/util/theme";
import React from "react";

const PrimaryButton = ({ buttonText, onPress, leftIcon, rightIcon }) => {
  return (
    <button className="flex justify-center items-center space-x-2 px-5 py-2  rounded-full" style={{backgroundColor:theme.surface.primary}} onClick={onPress}>
      {leftIcon}
      <p className="text-white text-xs">
      {buttonText}
      </p>
      {rightIcon}
    </button>
  );
};

export default PrimaryButton;
