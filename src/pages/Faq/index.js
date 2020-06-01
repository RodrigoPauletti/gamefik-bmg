import React from "react";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../../components/Header";

import fonts from "../../fonts";
import { colors } from "../../variables";

import { Button, ButtonLight, ButtonLightCustom } from "../../styles";
import { QuestionContainer } from "../../components/Question/styles";

export default function Faq() {
  const history = useHistory();

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div style={{ paddingTop: "120px", marginBottom: "70px" }}>
          <Button>Falar com um consultor</Button>
          <h3
            style={{
              fontFamily: fonts.OpenSans,
              color: colors.primary,
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "50px",
            }}
          >
            Dúvidas
          </h3>
          <ButtonLightCustom>
            Quais as opções de investimento mais populares em Renda Fixa?
          </ButtonLightCustom>
          <ButtonLightCustom>
            O que são títulos públicos (Tesouro Direto)?
          </ButtonLightCustom>
          <ButtonLightCustom>
            O que são títulos privados (CDB/LCI/LCA)?
          </ButtonLightCustom>
          <ButtonLightCustom>Como investir sem riscos?</ButtonLightCustom>
          <ButtonLight>Pesquisar</ButtonLight>
        </div>
        <QuestionContainer>
          <button
            className="change-step back-step"
            onClick={() => history.push("resultado")}
          >
            <FontAwesomeIcon icon="angle-left" />
          </button>
        </QuestionContainer>
      </div>
    </React.Fragment>
  );
}
