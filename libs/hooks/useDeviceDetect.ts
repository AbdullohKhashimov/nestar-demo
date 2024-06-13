import { useEffect, useState } from "react";

const useDeviceDetect = (): any => {
  const [device, setDevice] = useState<string>("desktop");

  useEffect((): any => {
    const userAgent = navigator.userAgent;
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    setDevice(isMobile ? "mobile" : "desktop");
  }, [device]);
  return device;
};

export default useDeviceDetect;
