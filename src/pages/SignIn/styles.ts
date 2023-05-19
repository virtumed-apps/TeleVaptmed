import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(135, 206, 235, 0.9);
  padding: 35px;
  box-shadow: 0px 0px 10px rgba(135, 206, 235, 0.9);
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  color: black;
  margin-bottom: 30px;
`;

export const FormInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #0077ff;
  }

  &.error {
    border-color: red;
  }
`;

export const ShowPasswordCheckbox = styled.label`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

export const ShowPasswordIcon = styled.div`
  font-size: 18px;
`;

export const SubmitButton = styled.button`
  background-color: black;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    transition: 0.4s;
    background-color: #0066cc;
  }
`;

export const ForgotPasswordLink = styled.a`
  font-size: 14px;
  color: black;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    transition: 0.4s;
    color: #0066cc;
  }
`;
