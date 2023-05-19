import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import {
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";
import { EnterRoomError } from "../utils/Error";

type User = {
  id: string;
  name: string;
  isAdmin: boolean;
};

type Room = {
  id?: string;
  name?: string;
  password?: string;
  clientEmail: string;
  clinicEmail: string;
  eventDate: string;
  time: string;
};

type AuthContextData = {
  signIn: (email: string, password: string) => Promise<void | string>;
  createRoom: (
    room: Room,
    id: string,
    password: string
  ) => Promise<void | string>;
  forgotPassword(email: string): Promise<void>;
  handleLogout: () => Promise<void>;
  enterRoom: (roomId: string, password: string) => Promise<void>;
  isLogging: boolean;
  user: User | null;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isLogging, setIsLogging] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser !== null) {
        const user: User = {
          id: currentUser.uid,
          name: currentUser.displayName || "",
          isAdmin: false, // Defina o valor adequado para isAdmin
        };
        setUser(user);
      } else {
        setUser(null);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);

  async function signIn(email: string, password: string) {
    if (!email || !password) {
      // Faça alguma ação em vez de usar o toast
      toast.error("Preencher os campos corretamente");
    }

    setIsLogging(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        const { code } = error;

        if (code === "auth/user-not-found" || code === "auth/wrong-password") {
          toast.error("Email ou Senha inválidos.");
          return;
        } else {
          toast.error("Ocorreu um erro");
          return;
        }
      })
      .finally(() => setIsLogging(false));
  }

  async function createRoom(room: Room, id: string, password: string) {
    try {
      const firestore = getFirestore();

      const roomData = {
        ...room,
        id,
        password,
      };

      await setDoc(doc(firestore, "rooms", roomData.id), roomData);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    setIsLogging(true);

    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLogging(false);
    }
  }

  async function enterRoom(roomId: string, password: string) {
    try {
      // Verifica se a sala existe no banco de dados com o ID fornecido
      const firestore = getFirestore();
      const roomRef = doc(firestore, "rooms", roomId);
      const roomSnap = await getDoc(roomRef);

      if (!roomSnap.exists()) {
        // Sala não encontrada
        toast.error("Sala não encontrada.");
        throw new EnterRoomError("Sala não encontrada.");
      }

      const roomData = roomSnap.data() as Room;

      // Verifica se as senhas fornecidas são iguais
      if (roomData.password !== password) {
        // Senhas não correspondem
        toast.error("ID ou Senha incorreta.");
        throw new EnterRoomError("Sala não encontrada.");
      }

      // Verifica se as informações fornecidas são válidas para entrada na sala
      const currentDate = new Date(); // Obtém a data e hora atual

      const eventDate = new Date(roomData.eventDate);
      const eventTime = roomData.time.split(":");
      const selectedDate = new Date(
        eventDate.getFullYear(),
        eventDate.getMonth(),
        eventDate.getDate(),
        parseInt(eventTime[0]),
        parseInt(eventTime[1])
      );

      const entryTime = new Date(selectedDate.getTime() - 5 * 60000); // Subtrai 5 minutos do horário do evento
      const endTime = new Date(selectedDate.getTime() + 60 * 60000); // Adiciona 1 hora ao horário do evento

      if (currentDate < entryTime) {
        // Ainda não é permitido entrar na sala
        const timeDiff = entryTime.getTime() - currentDate.getTime();
        const minutesDiff = Math.ceil(timeDiff / 60000);

        toast.error(`Você só pode entrar na sala em ${minutesDiff} minutos.`);
        throw new EnterRoomError(
          `Você só pode entrar na sala em ${minutesDiff} minutos.`
        );
      }

      if (currentDate > endTime) {
        // Já passou mais de 1 hora do horário do evento
        toast.error("O horário permitido para entrar na sala já expirou.");
        throw new EnterRoomError(
          "O horário permitido para entrar na sala já expirou."
        );
      }

      // Lógica para permitir a entrada do usuário na sala
      // ...

      toast.success("Entrou na sala com sucesso!");
    } catch (error) {
      if (error instanceof EnterRoomError) {
        throw error; // Lança o erro personalizado para ser tratado posteriormente
      }
      toast.error("Erro ao entrar na sala.");
    }
  }

  async function forgotPassword(email: string) {
    try {
      sendPasswordResetEmail(auth, email);
      console.log("Email de recuperação de senha enviado com sucesso!");
      // Exibir uma mensagem de sucesso para o usuário
    } catch (error) {
      console.log("Erro ao enviar o email de recuperação de senha:", error);
      // Exibir uma mensagem de erro para o usuário
    }
  }

  // Implemente as funções `signOut` e `forgotPassword` de acordo com suas necessidades
  return (
    <AuthContext.Provider
      value={{
        signIn,
        createRoom,
        enterRoom,
        handleLogout,
        forgotPassword,
        isLogging,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
