import { useEffect, useState } from "react";

export const useSetTitlePosition = (): boolean => {
  const [fixedTitle, setTitle] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fixedTitle]);

  const handleScroll = () => {
    const topOffset = window.pageYOffset;

    if (topOffset > 55 && !fixedTitle) {
      setTitle(true);
    } else if (topOffset < 55 && fixedTitle) {
      setTitle(false);
    }
  };

  return fixedTitle;
};
