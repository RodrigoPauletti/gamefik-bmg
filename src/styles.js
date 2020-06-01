import styled, { createGlobalStyle } from "styled-components";

import fonts from "./fonts";
import { colors } from "./variables";

export const GlobalStyle = createGlobalStyle`
  /* * {
    outline: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${fonts.Comfortaa};
    color: ${colors.light};
    text-decoration: none;
  }
  p {
    font-size: 18px;
    font-weight: medium;
  } */
  * {
    font-family: ${fonts.Comfortaa};
  }
  *, *:focus {
    outline: none !important;
  }
  html, body, #root {
    height: 100%;
  }
  p {
    margin: 0;
  }
  input {
    width: 100%;
    margin-top: 50px;
    padding: 12px 20px;
    border: 2px solid ${colors.primary};
    border-radius: 20px;
    color: ${colors.primary};
    font-weight: bold;
    text-align: right;
  }
`;

export const Button = styled.button`
  padding: 12px;
  margin-top: 50px;
  width: 100%;
  color: ${colors.white};
  font-weight: bold;
  border: 0;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    ${colors.primary} 0%,
    ${colors.secondary} 100%
  );
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;

export const ButtonLight = styled(Button)`
  color: ${colors.primary};
  border: 2px solid ${colors.primary};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  background: ${colors.white};
`;
