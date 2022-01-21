import { useEffect, useState } from "react";

type Lang = "EN" | "JP" | "NotSpecified";

const useCurrentLang = () => {
  const [currentLang, setCurrentLang] = useState<Lang>("NotSpecified");

  useEffect(() => {
    const currentPathName = window.location.pathname; /// '/' or '/jp/
    const listOfPath = currentPathName.split("/");
    if (listOfPath[1] === "jp") {
      setCurrentLang("JP");
    } else {
      setCurrentLang("EN");
    }
  }, []);
  return { currentLang };
};
export default useCurrentLang;
