import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ForgotPasswordLink,
  FormContainer,
  FormInput,
  FormInputContainer,
  FormTitle,
  LoginForm,
  ShowPasswordCheckbox,
  ShowPasswordIcon,
  SubmitButton,
} from "./styles";
import { useAuth } from "../../hooks/auth";

export const SignIn = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signIn } = useAuth();

  const navigate = useNavigate();

  function handleSignIn() {
    setLoading(true); // Define o estado de loading como true
    signIn(email, password);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    navigate("/home");
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(false); // Limpa o estado do erro
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setEmailError(true); // Define o estado do erro como verdadeiro
      return; // Interrompe a execução do envio do formulário
    }
  };

  return (
    <Container>
      {/* <ImageContainer>
        <img
          src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/240909448_137006761954864_4776190439407453177_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4y2QWEilsdcAX_zgSoB&_nc_ht=scontent-mia3-2.xx&oh=00_AfBqTpF7NJBc4_TkdEh2ki2KrYssog5pzRO1kB0JR_m3Vw&oe=6469B72D"
          alt="Logo"
          width={350}
          height={350}
        />
      </ImageContainer> */}
      <FormContainer>
        <LoginForm onSubmit={handleSubmit}>
          <FormTitle>Login</FormTitle>
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
          <FormInputContainer>
            <FormInput
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <ShowPasswordCheckbox onClick={handleShowPasswordChange}>
              <ShowPasswordIcon>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </ShowPasswordIcon>
            </ShowPasswordCheckbox>
          </FormInputContainer>
          <ForgotPasswordLink onClick={handleForgotPassword}>
            Esqueci minha senha
          </ForgotPasswordLink>
          <br />
          <SubmitButton onClick={handleSignIn} disabled={loading}>
            {loading ? "Carregando..." : "Entrar"}
          </SubmitButton>
        </LoginForm>
      </FormContainer>
    </Container>
  );
};
