import styled from "styled-components";

import { colors } from "../../variables";

export const CardContainer = styled.div`
  background: linear-gradient(
    90deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    color: ${colors.white};
    font-size: 23px;
    text-align: right;
    margin-bottom: 10px;
  }
  p.strong {
    font-weight: bold;
    text-align: left;
  }
`;
