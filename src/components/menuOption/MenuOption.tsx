import useDeviceType from "@/hooks/useDeviceType";
import Image from "next/image";
import React from "react";

interface MenuOptionProps {
  icon: any;
  activeMenu: boolean;
  label: string;
  onPress: () => void;
  labelClass: string;
  imageSize: number;
}

const MenuOption: React.FC<MenuOptionProps> = ({
  icon,
  activeMenu,
  label,
  onPress,
  labelClass,
  imageSize,
}) => {
  const deviceType = useDeviceType();
  const activeStyles = {
    backgroundColor: "#00000020",
    alignSelf: "flex-start",
    padding: "0.5rem",
    borderRadius: "2rem",
  };
  return (
    <div
      className="flex cursor-pointer justify-start items-center space-x-2 mt-5 px-2 w-max"
      onClick={onPress}
      style={activeMenu ? activeStyles : undefined}
    >
      <Image
        src={icon}
        height={imageSize}
        width={imageSize}
        alt={`${icon}-icon`}
      />
      {deviceType === "lg" && <p className={labelClass}>{label}</p>}
    </div>
  );
};

export default MenuOption;
