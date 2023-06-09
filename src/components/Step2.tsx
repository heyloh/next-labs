import { useEffect } from "react";
import { useStepper } from "./StepContext";
import { useSum } from "./SumContext";

export const Step2 = () => {
  const { previousStep, goToStep } = useStepper();
  const { value, setValue } = useSum();
  useEffect(() => {
    setValue(value + 10);
  }, []);
  return (
    <div>
      <h2>SUM: {value}</h2>
      <p>Step 2</p>
      <button onClick={previousStep}>Prev</button>
      <button onClick={() => goToStep(3)}>Next</button>
    </div>
  );
};
