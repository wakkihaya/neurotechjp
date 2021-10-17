const useCurrentLang = () => {
  const currentPathName = window.location.pathname; /// '/' or '/jp/
  const listOfPath = currentPathName.split("/");
  if (listOfPath[1] === "jp") {
    return "jp";
  } else {
    return "en";
  }
};
export default useCurrentLang;
