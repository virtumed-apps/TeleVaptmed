import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  FormInput,
  FormInputContainer,
  FormTitle,
  LoginForm,
  SubmitButton,
} from "./styles";

export const Forgot = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    setEmailError(false); // Limpa o estado do erro
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setEmailError(true); // Define o estado do erro como verdadeiro
      return; // Interrompe a execução do envio do formulário
    }

    // Lógica para redefinir a senha
    // ...

    // Redireciona para a página de login após o envio do formulário
    navigate("/signIn");
  };

  return (
    <Container>
      <FormContainer>
        <LoginForm onSubmit={handleSubmit}>
          <FormTitle>Esqueci minha senha</FormTitle>
          <FormInputContainer>
            <FormInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
              className={emailError ? "error" : ""}
            />
          </FormInputContainer>
          <SubmitButton type="submit">Redefinir Senha</SubmitButton>
        </LoginForm>
      </FormContainer>
    </Container>
  );
};
