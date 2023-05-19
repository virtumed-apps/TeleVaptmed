import styled from "styled-components";
import { Field } from "formik";

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const StyledInput = styled(Field)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #4c9aff;
  }
`;

export const ErrorText = styled.span`
  font-size: 14px;
  color: red;
`;
