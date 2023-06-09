import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from "@/components/Step3";
import { Step4 } from "@/components/Step4";
import { Stepper } from "@/components/Stepper";
import { SumProvider } from "@/components/SumProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <SumProvider>
        <Stepper>
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
        </Stepper>
      </SumProvider>
    </main>
  );
}
