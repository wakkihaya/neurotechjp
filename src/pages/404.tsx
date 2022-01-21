import React, { useEffect } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
import useCurrentLang from "~hooks/use-currentLang";

const Custom404: FC = () => {
  const router = useRouter();
  const { currentLang } = useCurrentLang();

  useEffect(() => {
    setTimeout(function () {
      if (currentLang === "JP") {
        router.replace("/jp");
      } else {
        router.replace("/");
      }
    }, 3000);
  }, []);

  return (
    <div className="error-container">
      <div className="error-content">
        <p className="error-content--title">404 Error</p>
        <p className="error-content--subtitle">
          The page doesn't exist... <br />
          Auto-redirect to TOP page soon.
        </p>
      </div>
    </div>
  );
};

export default Custom404;
