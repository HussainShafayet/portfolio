
import { useEffect } from "react";

const ScrollToHash = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Add a slight delay to allow DOM/rendering to settle
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth"});
        }, 100);
      }
    }
  }, []);

  return null;
};

export default ScrollToHash;
