import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ButtonContainer = styled.button<{ isLoading?: boolean }>`
/* Estilos para o botão */
/* ... */

/* Estilos quando isLoading for verdadeiro */
${({ isLoading }) =>
  isLoading &&
  `
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-top-color: transparent;
    animation: ${spinAnimation} 0.6s linear infinite;
  }
`}
`;
