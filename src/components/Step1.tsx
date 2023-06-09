import { useEffect } from "react";
import { useStepper } from "./StepContext";
import { useSum } from "./SumContext";

export const Step1 = () => {
  const { goToStep } = useStepper();
  const { value, setValue } = useSum();

  useEffect(() => {
    setValue(10)
  }, [])

  return (
    <div>
      <h2>SUM: {value}</h2>
      <p>Which step do you want?</p>
      <button onClick={() => goToStep(1)}>Step 2</button>
      <button onClick={() => goToStep(2)}>Step 3</button>
    </div>
  );
};
