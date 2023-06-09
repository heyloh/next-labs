import { useStepper } from "./StepContext";
import { useSum } from "./SumContext";

export const Step4 = () => {
  const { previousStep } = useStepper();
  const { value } = useSum();
  return (
    <div>
      <h2>FINAL SUM: {value}</h2>
      <p>Step 4</p>
      <button onClick={previousStep}>Prev</button>
    </div>
  );
};
