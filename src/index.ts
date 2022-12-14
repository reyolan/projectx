import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  --light-green: #8DC647;
  --small-text: 0.875rem;
  --base-text: 1rem;
  --large-text: 1.125rem;
  --xl-text: 1.25rem;
  --2xl-text: 1.5rem;
  --3xl-text: 1.875rem;
  --4xl-text: 2.25rem;
  --5xl-text: 3rem;
  --slate: #f8fbfc;
  --light-slate: #e5e7eb;
  --lighter-gray: #ebebeb; }
  
ul { list-style-type:none;
}
    
a { text-decoration: none;
}`;
export default GlobalStyles;
