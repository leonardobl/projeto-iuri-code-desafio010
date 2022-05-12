import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
:root{
  
  --purple-light: #8257E6;
  --white: #FEFBFB;
  --white-200: #C4C4C4;
  --gray-200: #282830;
  --dark: #13131F;
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #__next{
  height: 100%;
  background-color: var(--dark);
  color: var(--white);
}

h1, h2 {
  font-family: 'Lexend Deca', sans-serif
}

h3, p, a{
  font-family: 'Inter', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

`