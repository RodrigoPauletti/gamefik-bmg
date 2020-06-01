import React from "react";

import { CardContainer } from "./styles";

export default function Results({ taxa, ir }) {
  return (
    <CardContainer>
      <div>
        <p className="strong">Prazo</p>
        <p>1 ano</p>
      </div>
      <div>
        <p className="strong">Taxa</p>
        <p>{taxa}</p>
      </div>
      <div>
        <p className="strong">IR</p>
        <p>{ir}</p>
      </div>
      <div>
        <p className="strong">Aplicação mínima</p>
        <p>R$100,00</p>
      </div>
      <div>
        <p className="strong">Liquidez</p>
        <p>Vencimento</p>
      </div>
    </CardContainer>
  );
}
