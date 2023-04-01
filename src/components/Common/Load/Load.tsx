import React, { useEffect, useState } from "react";
import { PageLoader } from "../PageLoader";

const WithLoad = (Component: any, waitingTime: number = 1500) => {
  const Load: React.FC = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, waitingTime);
      return () => {
        clearTimeout(timer);
      };
    }, []);
    return <>{isLoading ? <PageLoader /> : <Component />}</>;
  };
  return Load;
};

export default WithLoad;
