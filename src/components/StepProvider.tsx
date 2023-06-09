import { ReactNode, Children, useState } from "react";
import { StepContext } from "./StepContext";

export const StepProvider = ({ children }: { children?: ReactNode }) => {
  const steps = Children.toArray(children);
  const [activeStep, setActiveStep] = useState(0);

  const nextStep = () => {
    setActiveStep((oldActiveStep) => oldActiveStep + 1);
  };

  const previousStep = () => {
    setActiveStep((oldActiveStep) => oldActiveStep - 1);
  };

  const goToStep = (step: number) => {
    if (step < 0 || step >= steps.length) throw new Error("Invalid step");
    setActiveStep(step);
  };

  return (
    <StepContext.Provider value={{ nextStep, previousStep, goToStep }}>
      {steps[activeStep]}
    </StepContext.Provider>
  );
};
