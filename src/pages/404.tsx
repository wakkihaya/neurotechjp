import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useCurrentLang from "~hooks/use-currentLang";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const currentLang = useCurrentLang();

    if (currentLang === "jp") {
      router.replace("/jp");
    } else {
      router.replace("/");
    }
  });

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
}
