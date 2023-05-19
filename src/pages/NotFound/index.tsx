import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NotFoundText = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const GoBackButton = styled.button`
  background-color: #0077ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0066cc;
  }
`;

export const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Volta para a página anterior
  };

  return (
    <Container>
      <NotFoundText>Página não encontrada</NotFoundText>
      <GoBackButton onClick={handleGoBack}>Voltar</GoBackButton>
    </Container>
  );
};
