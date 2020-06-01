import styled from "styled-components";

import fonts from "../../fonts";
import { colors } from "../../variables";

export const ResultsContainer = styled.div`
  padding-top: 120px;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 50px;
  .title {
    font-family: ${fonts.OpenSans};
  }
  .subtitle {
    font-family: ${fonts.OpenSans};
    text-align: left;
  }
  p {
    font-family: ${fonts.Comfortaa};
    &.light {
      color: ${colors.white};
    }
    &.strong {
      font-weight: bold;
    }
  }
`;
