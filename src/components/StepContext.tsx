import { createContext, useContext } from "react";

type StepContextProps = {
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
};

export const StepContext = createContext<StepContextProps>({} as StepContextProps);

export const useStepper = () => {
  const stepper = useContext(StepContext)
  return stepper
}
