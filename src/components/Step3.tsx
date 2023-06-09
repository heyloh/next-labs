import { useEffect } from "react";
import { useStepper } from "./StepContext";
import { useSum } from "./SumContext";

export const Step3 = () => {
  const { goToStep } = useStepper();
  const { value, setValue } = useSum();
  useEffect(() => {
    setValue(value + 15);
  }, []);
  return (
    <div>
      <h2>SUM: {value}</h2>
      <p>Step 3</p>
      <button onClick={() => goToStep(0)}>Prev</button>
      <button onClick={() => goToStep(3)}>Next</button>
    </div>
  );
};
