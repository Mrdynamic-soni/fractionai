import { theme } from "@/util/theme";
import React from "react";

interface PrimaryButtonProps {
  buttonText: string;
  onPress: () => void;
  leftIcon?: React.ReactNode; // Specify the type for leftIcon and rightIcon as React.ReactNode
  rightIcon?: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  buttonText,
  onPress,
  leftIcon,
  rightIcon,
}) => {
  return (
    <button
      className="flex justify-center items-center space-x-2 px-5 py-2 rounded-full"
      style={{ backgroundColor: theme.surface.primary }}
      onClick={onPress}
    >
      {leftIcon && <span className="">{leftIcon}</span>}
      <p className="text-white text-xs">{buttonText}</p>
      {rightIcon && <span className="">{rightIcon}</span>}
    </button>
  );
};

export default PrimaryButton;
