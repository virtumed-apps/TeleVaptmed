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
  background-color: #fff;
  padding: 35px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const FormInputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
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

export const ForgotPasswordLink = styled.a`
  font-size: 14px;
  color: #0077ff;
  margin-top: 10px;
  cursor: pointer;
`;
