import { useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";
import { useAuth } from "../../hooks/auth";

import {
  Background,
  Button,
  Container,
  Input,
  InputContainer,
  Logo,
  Main,
  TextInfo,
} from "./styles";

// Componente principal
export const Room = () => {
  const { enterRoom } = useAuth();

  const [displayName, setDisplayName] = useState("");
  const [roomName, setRoomName] = useState("");
  const [password, setPassword] = useState("");
  const [onCall, setOnCall] = useState(false);

  const handleStartCall = async () => {
    if (!roomName || !displayName ||  !password) {
      // Verifique se o nome da sala e a senha foram preenchidos
      console.log("Preencha o nome da sala e a senha corretamente.");
      return;
    }
  
    try {
      await enterRoom(roomName, password);
      setOnCall(true); // Defina onCall como true para iniciar a chamada
    } catch (error) {
      console.log(error);
      // Trate o erro ou exiba uma mensagem para o usuário
    }
  };

  return (
    <Background>
      <Container className={onCall ? "onCall" : ""}>
        {!onCall && (
          <Logo>
            <a href="/">
              <img
                src="https://vaptmed.com.br/wp-content/uploads/2021/03/VaptMed-Final-4.png"
                alt="logo"
                width={180}
              />
            </a>
          </Logo>
        )}

        <Main>
          {onCall ? (
            <JitsiMeeting
              roomName={roomName}
              spinner={"circle"}
              configOverwrite={{
                startWithAudioMuted: true,
                startWithVideoMuted: true,
                requireDisplayName: true,
                password: { password },
                invitees: [displayName]              
              }}
              getIFrameRef={(node) => {
                if (window.innerWidth) {
                  node.style.width = "100vw"; // Valor médio para desktop
                  node.style.height = "100vh"; // Valor médio para desktop
                } else if (window.innerWidth >= 768) {
                  node.style.width = "100vw"; // Valor médio para tablet
                  node.style.height = "100vh"; // Valor médio para tablet
                  node.style.overflowX = "hidden"; // Valor médio para desktop
                  node.style.overflowY = "auto"; // Valor médio para desktop
                } else {
                  node.style.width = "100vw"; // Valor médio para celular
                  node.style.height = "100vh"; // Valor médio para celular
                  node.style.overflowX = "hidden"; // Valor médio para desktop
                  node.style.overflowY = "scroll"; // Valor médio para desktop
                }
                // Adicione outras propriedades de estilização conforme necessário
              }}
            />
          ) : (
            <>
              <TextInfo>Entrar na Sala:</TextInfo>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="ID da Sala"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </InputContainer>
              <InputContainer>
                <Input
                  type="text"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputContainer>
              <Button onClick={handleStartCall} type="submit">
                Vamos começar
              </Button>
            </>
          )}
        </Main>
      </Container>
    </Background>
  );
};
