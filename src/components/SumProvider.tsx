import { useState } from "react";
import { SumContext } from "./SumContext";

export const SumProvider = ({ children }: any) => {
  const [value, setValue] = useState(0);
  return (
    <SumContext.Provider value={{ value, setValue }}>
      {children}
    </SumContext.Provider>
  );
};
