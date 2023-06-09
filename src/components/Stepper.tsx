import { ReactNode } from "react";
import { StepProvider } from "./StepProvider";

export const Stepper = ({ children }: { children: ReactNode }) => {
  return <StepProvider>{children}</StepProvider>;
};
