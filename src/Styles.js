import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    background-color: #f3f3f3;
    color: #1d1f27;
    margin: 0;
    padding: 0;
  }

  p, h1, ul {
      margin: 0;
  }


  button, a, p, div, section{
    transition: all 420ms ease;
  }

  button {
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
  }


  section, input, textarea{
    box-sizing: border-box;
  }

`;

export default GlobalStyle;

export const Theme = {
  primary: "#51adcf",
  background: "#f3f3f3",
  accent: "#F090A6",
  text: "#212121",
  error: "crimson",
};
