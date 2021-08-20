import { useEffect, useState } from "react";

export const useVerifyIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const verifyIsMobile = () => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  };

  useEffect(() => {
    window.innerWidth < 768 && setIsMobile(true);
    window.addEventListener("resize", verifyIsMobile);

    return () => {
      window.removeEventListener("resize", verifyIsMobile);
    };
  }, []);

  return {isMobile}
};
