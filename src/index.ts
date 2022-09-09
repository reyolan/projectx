import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;}`;

export default GlobalStyles;
