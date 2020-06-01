import React from "react";

import Header from "../../components/Header";
import Question from "../../components/Question";

export default function Home() {
  const steps = [
    {
      step: 1,
      question: "Já possui algum conhecimento em Renda Fixa?",
      options: ["Sim", "Não"],
      active: true,
    },
    {
      step: 2,
      question: "Qual valor deseja investir?",
      options: [{ input: true }],
      active: false,
    },
    {
      step: 3,
      question: "Estimativa de prazo para retirada? ",
      options: [
        "03 meses",
        "06 meses",
        "01 ano",
        "01 ano e meio",
        "02 anos ou mais",
      ],
      active: false,
    },
  ];

  return (
    <React.Fragment>
      <Header />
      <Question steps={steps} />
    </React.Fragment>
  );
}
