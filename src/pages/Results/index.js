import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";
import Card from "../../components/Card";

import { ResultsContainer } from "./styles";
import { Button, ButtonLight } from "../../styles";

export default function Results() {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <ResultsContainer>
          <div>
            <h3 className="title">Resumo</h3>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <p className="strong">Prazo</p>
                <p>1 ano</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "10px",
                }}
              >
                <p className="strong">Investimento</p>
                <p>R$ 500,00</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h3 className="title mt-5">Modelos sugeridos</h3>
            <div>
              <div className="mt-5">
                <h6 className="subtitle">CDB BMG DI</h6>
                <Card taxa="120,00% CDI" ir="17,50%" />
              </div>
              <div className="mt-5">
                <h6 className="subtitle">CDB BMG IPCA +</h6>
                <Card taxa="IPCA + 1,17% a.a." ir="17,50%" />
              </div>
              <div className="mt-5">
                <h6 className="subtitle">CDB BMG PRÉ</h6>
                <Card taxa="3,09% a.a." ir="17,50%" />
              </div>
            </div>
          </div>
          <Link to="/faq">
            <ButtonLight>Saiba mais</ButtonLight>
          </Link>
          <Button>Investir já</Button>
        </ResultsContainer>
      </div>
    </React.Fragment>
  );
}
