import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Silkscreen", cursive;
}
body{
    height:100%;
    background: linear-gradient(to right, #a8c0ff, #3f2b96);
}
`;
