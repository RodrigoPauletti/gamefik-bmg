import styled from "styled-components";

import fonts from "../../fonts";
import { colors } from "../../variables";

export const QuestionContainer = styled.div`
  .change-step {
    border: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    background: linear-gradient(
      90deg,
      ${colors.primary} 0%,
      ${colors.secondary} 100%
    );
    border-radius: 40px;
    font-size: 25px;
    position: fixed;
    bottom: 10px;
  }
  .back-step {
    left: 10px;
  }
  .next-step {
    right: 10px;
  }
  margin-bottom: 80px;
`;

export const QuestionHeader = styled.div`
  height: 330px;
  padding-top: 110px;
  background: linear-gradient(
    90deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0 0 10px 10px;
  text-align: center;
  p {
    font-family: ${fonts.Comfortaa};
    font-weight: bold;
    font-size: 32px;
    color: ${colors.white};
    margin-top: 28px;
  }
  .question-steps {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const QuestionStep = styled.div`
  background: ${(props) =>
    props.selected ? colors.white : "rgba(255, 255, 255, 0.2)"};
  width: ${(props) => (props.selected ? "25px" : "15px")};
  height: ${(props) => (props.selected ? "25px" : "15px")};
  border-radius: 20px;
  margin: 0 7.5px;
`;
