import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { QuestionContainer, QuestionHeader, QuestionStep } from "./styles";
import { Button } from "../../styles";

export default function Home({ steps }) {
  const history = useHistory();

  const [actualStep, setActualStep] = useState(0);
  const [value, setValue] = useState("");

  function nextStep() {
    if (actualStep + 1 < steps.length) {
      setActualStep(actualStep + 1);
    } else {
      history.push("/resultado");
    }
  }

  function backStep() {
    if (actualStep > 0) {
      setActualStep(actualStep - 1);
    }
  }

  function handleChange(value) {
    setValue(value);
  }

  return (
    <QuestionContainer>
      <QuestionHeader>
        <div className="question-steps">
          {steps.map((step, index) => {
            return <QuestionStep selected={index === actualStep} key={index} />;
          })}
        </div>
        <p>{steps[actualStep].question}</p>
      </QuestionHeader>
      <div className="container">
        {steps[actualStep].options.map((option, index) => {
          if (option.input) {
            return (
              <input
                key={index}
                onChange={(e) => handleChange(e.target.value)}
                value={value}
              />
            );
          } else {
            return (
              <Button key={index} onClick={() => nextStep()}>
                {option}
              </Button>
            );
          }
        })}
      </div>
      {actualStep > 0 && (
        <button className="change-step back-step" onClick={() => backStep()}>
          <FontAwesomeIcon icon="angle-left" />
        </button>
      )}
      {actualStep < steps.length && (
        <button className="change-step next-step" onClick={() => nextStep()}>
          <FontAwesomeIcon icon="angle-right" />
        </button>
      )}
    </QuestionContainer>
  );
}
