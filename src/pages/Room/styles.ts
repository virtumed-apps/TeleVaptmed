import styled from "styled-components";

// Estilos dos componentes
export const Background = styled.div`
  background-color: #0f75bc;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box; /* Considerar as bordas e o preenchimento no dimensionamento */
  padding: 30px; /* Adicionar preenchimento para que o conteúdo não fique muito próximo das bordas */

  &.onCall {
    /* Estilo personalizado quando onCall está ativado */
    position: fixed;
    width: 100%;
    height: 100%;
    padding: 0;
  }
`;

export const Main = styled.main`
  text-align: center;
  margin-bottom: 40px;
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  border: #333 1px solid;
  border-radius: 4px;
  font-size: 16px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #4e79ea;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const TextInfo = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #4e79ea;
  margin-bottom: 2rem;
`;

export const Logo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
`;