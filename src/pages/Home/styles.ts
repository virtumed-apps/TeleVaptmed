import styled, { createGlobalStyle } from "styled-components";

// Estilos globais
export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;

export const MainContainer = styled.main`
  padding: 10px 40px;
  height: 100vh;
  overflow-y: auto; /* Use "auto" para habilitar a barra de rolagem apenas quando necessário */
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 3rem;
`;
