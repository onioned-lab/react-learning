import { useEffect } from "react";

export const TestCleanup = () => {
  useEffect(() => {
    console.log("init test cleanup");
    return () => {
      console.log("destruct clean up");
    };
  }, []);
  return <div>TestCleanup</div>;
};
export const X = 10;
export default 20;
