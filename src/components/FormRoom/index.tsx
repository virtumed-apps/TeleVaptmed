import { Formik, Form, ErrorMessage } from "formik";
import { useAuth } from "../../hooks/auth";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import "react-toastify/dist/ReactToastify.css";

import * as Yup from "yup";

import {
  ErrorText,
  InputContainer,
  InputLabel,
  StyledButton,
  StyledInput,
} from "./styles";

type FormValues = {
  clientEmail: string;
  clinicEmail: string;
  eventDate: string;
  time: string;
};

// const API_KEY = process.env.SETAPIKEY as string;
// const My_Email = process.env.MYEMAIL as string;

// const ServiceIdClient = process.env.SERVICE_ID_CLIENT as string;
// const TemplateIdClient = process.env.TEMPLATE_ID_CLIENT as string;

// const ServiceIdClinic = process.env.SERVICE_ID_CLINIC as string;
// const TemplateIdClinic = process.env.TEMPLATE_ID_CLINIC as string;

const validationSchema = Yup.object().shape({
  clientEmail: Yup.string()
    .email("Email inválido")
    .required("Campo obrigatório"),
  clinicEmail: Yup.string()
    .email("Email inválido")
    .required("Campo obrigatório"),
  eventDate: Yup.string().required("Campo obrigatório"),
  time: Yup.string().required("Campo obrigatório"),
});

// Função para gerar um ID de sala no formato "abc-def-ghi"
const generateRoomId = (): string => {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let roomId = "";

  for (let i = 0; i < 9; i++) {
    if (i > 0 && i % 3 === 0) {
      roomId += "-";
    }
    roomId += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return roomId;
};

// Função para gerar uma senha aleatória com 6 dígitos
const generatePassword = (): string => {
  const length = 6; // comprimento da senha desejada
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // caracteres permitidos na senha
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};

export const FormRoom = () => {
  const { createRoom } = useAuth();

  const handleCreateRoom = async (values: FormValues) => {
    const currentDate = new Date(); // Obtém a data e hora atual

    const selectedDate = new Date(`${values.eventDate}T${values.time}`); // Combina a data e hora selecionadas pelo usuário

    if (selectedDate < currentDate) {
      // A data e hora selecionadas são anteriores à data e hora atual
      toast.error(
        "A data e hora selecionadas são anteriores à data e hora atual"
      );
      return;
    }

    const roomData = {
      name: `Consulta Vaptmed - ${currentDate}`, // Defina o nome da sala conforme necessário
      clientEmail: values.clientEmail,
      clinicEmail: values.clinicEmail,
      eventDate: values.eventDate,
      time: values.time,
    };

    try {
      let id = generateRoomId();
      let password = generatePassword();

      await createRoom(roomData, id, password); // Cria a sala

      // Envia o e-mail para o cliente
      const clientMsg = {
        sala: id,
        senha: password,
        clientEmail: values.clientEmail,
        eventDate: values.eventDate,
        time: values.time,
      };

      // Envia o e-mail para a clínica
      const clinicMsg = {
        sala: id,
        senha: password,
        clinicEmail: values.clinicEmail,
        eventDate: values.eventDate,
        time: values.time,
      };

      emailjs.send(
        "service_2u8426h",
        "template_2875aca",
        clientMsg,
        "nJKK7HNjzTgvAQ8j1"
      );

      emailjs.send(
        "service_2u8426h",
        "template_oqet6tm",
        clinicMsg,
        "nJKK7HNjzTgvAQ8j1"
      );

      toast.success("Sala criada com sucesso!");
    } catch (error) {
      console.error("Erro ao criar a sala:", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          clientEmail: "",
          clinicEmail: "",
          eventDate: "",
          time: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleCreateRoom}
      >
        <Form>
          <InputContainer>
            <InputLabel>Email do Cliente:</InputLabel>
            <StyledInput
              type="email"
              name="clientEmail"
              placeholder="Digite o e-mail do cliente"
            />
            <ErrorText>
              <ErrorMessage name="clientEmail" />
            </ErrorText>
          </InputContainer>
          <InputContainer>
            <InputLabel>Email da Clínica:</InputLabel>
            <StyledInput
              type="email"
              name="clinicEmail"
              placeholder="Digite o e-mail da clínica"
            />
            <ErrorText>
              <ErrorMessage name="clinicEmail" />
            </ErrorText>
          </InputContainer>
          <InputContainer>
            <InputLabel>Data do Evento:</InputLabel>
            <StyledInput
              type="date"
              name="eventDate"
              placeholder="Selecione a data do evento"
            />
            <ErrorText>
              <ErrorMessage name="eventDate" />
            </ErrorText>
          </InputContainer>
          <InputContainer>
            <InputLabel>Hora do Evento:</InputLabel>
            <StyledInput
              type="time"
              name="time"
              placeholder="Selecione a hora do evento"
            />
            <ErrorText>
              <ErrorMessage name="time" />
            </ErrorText>
          </InputContainer>
          <StyledButton type="submit">Criar Sala</StyledButton>
        </Form>
      </Formik>
    </>
  );
};
