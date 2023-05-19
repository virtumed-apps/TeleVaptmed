import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  onClick: (event: any) => void
  isLoading?: boolean;
};
const Button = ({ title, onClick }: Props) => {
  return (
    <ButtonContainer onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
