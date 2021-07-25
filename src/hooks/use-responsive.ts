import { useState, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";

type useResponsiveReturnType = "Desktop" | "Mobile";

const useResponsive = (): useResponsiveReturnType => {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    query: "(max-width: 798px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-width: 798px)",
  });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  if (!isClient) {
    return "Desktop";
  } else {
    if (isMobile) {
      return "Mobile";
    }
    if (isDesktop) {
      return "Desktop";
    }
  }
};

export default useResponsive;
