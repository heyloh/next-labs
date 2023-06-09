import { createContext, useContext } from "react";

type Sum = {
  value: number;
  setValue: (value: number) => void;
};

export const SumContext = createContext<Sum>({} as Sum);

export const useSum = () => {
  const sum = useContext(SumContext);
  return sum;
}
