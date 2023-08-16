import React, { useEffect } from "react";

import useIsVisible from "./useIsVisible";

export default function useIsVisibleOnce(ref) {
  const isVisible = useIsVisible(ref);
  const [isOnce, setIsOnce] = React.useState(false);

  useEffect(() => {
    if (!isOnce && isVisible) {
      setIsOnce(true);
    }
  }, [isOnce, setIsOnce, isVisible]);

  return isOnce;
}
