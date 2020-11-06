import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        margin: 0;
        padding:0;
        outline:0;
    }
    body{
        font-family: 'Roboto', sans-serif;
        display: flex;
        justify-content: center;
        /* height:100vh; */
        align-items: center;
    }
`;
