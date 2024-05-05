"use client";

import { useState, useEffect } from "react";

const useDeviceType = () => {
  const [deviceSize, setDeviceSize] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setDeviceSize("lg");
      } else if (width >= 768 && width < 1024) {
        setDeviceSize("md");
      } else {
        setDeviceSize("sm");
      }
    };

    // Initial call to set the initial device size
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceSize;
};

export default useDeviceType;
