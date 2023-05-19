import styled, { css } from "styled-components";

export type TypeProps = "text" | "password"|  boolean;

type Props = {
  type: TypeProps;
};

export const Container = styled.input<Props>`
  width: 100%;
  height: 36px;
  background-color: transparent;
  border-radius: 6px;
  font-size: 14px;
  margin-bottom: 16px;

  ${({ theme, type }) => css`
    padding: 0 7px; /* Exemplo de espaçamento de 7px no topo e na base, e 10px nas laterais */
    box-sizing: border-box; /* Adicione esta propriedade para incluir o padding no tamanho total do elemento */
    font-family: ${theme.FONTS.TEXT};
    border: 1px solid ${theme.COLORS.SHAPE};
  `};

  &::placeholder {
    /* Adicione o espaçamento desejado aqui */
    padding: 10px; /* Exemplo de espaçamento de 10px */
  }
`;
