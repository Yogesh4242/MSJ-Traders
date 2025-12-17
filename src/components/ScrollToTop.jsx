import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
  const navigationType = useNavigationType(); // Detects PUSH / POP navigation

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [navigationType]); // Runs when the route changes

  return null;
};

export default ScrollToTop;