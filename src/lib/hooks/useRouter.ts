import { useCallback, useEffect, useState } from "react";

type Routes = "home" | "projects";

export const useRouter = () => {
  const [route, setRoute] = useState<Routes>("home");

  const goto = useCallback((route: Routes) => {
    setRoute(route);
  }, []);

  useEffect(() => {
    const element = document.getElementById(route);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  }, [route]);

  return {
    goto,
    path: route,
  };
};
