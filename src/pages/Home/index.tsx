import { MainContainer, Title } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { FormRoom } from "../../components/FormRoom";

export const Home = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Title>Criar Reunião:</Title>
        <FormRoom />
      </MainContainer>
      <Footer />
    </>
  );
};
