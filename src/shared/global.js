import { createGlobalStyle, css } from "styled-components";
import { color, typography } from "./styles";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}rem;
  font-weight: ${typography.weight.regular};
  background: #1e1e1e;
  color: ${color.lighter};

  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  main {
    display: grid;
    grid-template-columns: minmax(2rem, 1fr) minmax(auto, 112rem) minmax(
        2rem,
        1fr
      );

    header,
    section {
      grid-column-start: 2;
    }
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  h1 {
    text-align: center;
  }
`;

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    ${bodyStyles}
  }
`;
