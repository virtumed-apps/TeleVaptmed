import React, { InputHTMLAttributes } from "react";

import { Container, TypeProps } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type?: TypeProps;
};

const Input = ({ type = "text", ...rest }: Props) => {
  return <Container type={type} {...rest} />;
};

export default Input;
