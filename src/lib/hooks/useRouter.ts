import { useCallback, useEffect, useRef, useState } from "react";

type Routes = "/" | "/projects";

const routeMap: Record<Routes, string> = {
  "/": "home",
  "/projects": "projects",
};

const routeMatcher = (route: Routes) => {
  return routeMap[route];
};

/**
 * A custom router that does "routing" by smooth scrolling to the page component.
 * In order to add a new route, update the `Routes` type to add a new path and add a new `id` type to that
 * new route to the `routeMatcher`. You must also set an `id` somewhere on the page that matches any string
 * in `Routes`.
 */
export const useRouter = () => {
  const [route, setRoute] = useState<Routes>("/");

  // This ref is used to prevent hopping when scrolling even though the route itself will change.
  const manualScrollRef = useRef(true);

  const goto = useCallback((route: Routes) => {
    manualScrollRef.current = false;
    setRoute(route);
    setTimeout(() => {
      manualScrollRef.current = true;
    }, 500);
  }, []);

  useEffect(() => {
    // The route has updated manually. We should not scroll.
    if (manualScrollRef.current) return;

    // Index override to scroll to the top of the screen instead.
    if (route === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(routeMatcher(route));
    if (!element) return;

    scrollToElementWithOffset(element, 200);
  }, [route]);

  const manuallyScrolledPath = () => {
    if (!manualScrollRef.current) return;

    if (window.scrollY === 0) {
      setRoute("/");
      return;
    }

    for (const [path, id] of Object.entries(routeMap)) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2;

      if (inView) {
        setRoute(path as Routes);
        return;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", manuallyScrolledPath);

    return () => {
      window.removeEventListener("scroll", manuallyScrolledPath);
    };
  });

  return {
    goto,
    path: route,
  };
};

function scrollToElementWithOffset(
  element: HTMLElement,
  offset: number = 100,
): void {
  const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
  const scrollTarget = elementTop - offset;

  window.scrollTo({
    top: scrollTarget,
    behavior: "smooth",
  });
}
