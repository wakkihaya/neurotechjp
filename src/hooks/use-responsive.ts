import { useState, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
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

  return {
    isDesktop: isClient ? isDesktop : true,
    isMobile: isClient ? isMobile : false,
  };
};

export default useResponsive;
