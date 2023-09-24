import { useEffect } from "react";

const useScrollTo = (position) => {
  useEffect(() => {
    window.scrollTo(0, position);
  }, [position]);
};

export default useScrollTo;
