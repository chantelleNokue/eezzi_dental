import React, { useState } from "react";
import {TiTick} from 'react-icons/ti'

function Stepper() {
  const steps = ["Personal Info", "Account Info", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <div>
      <div className=" flex justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            }`}
          >
            <div class="step">{(i + 1 < currentStep || complete) ?<TiTick size={24}/> : i+1 }</div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
        {/* <div key={i} className= {`${currentStep === i + 1 && "active"}`} >          */}
      </div>
     {
        !complete &&  <button
        onClick={() => {
          currentStep === steps.length
            ? setComplete(true)
            : setCurrentStep((prev) => prev + 1);
        }}
      >
       { currentStep === steps.length ? "Finish": "Next" }
      </button>
     }
    </div>
    // </div>
  );
}

export default Stepper;


