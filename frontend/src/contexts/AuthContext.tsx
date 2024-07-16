/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { useLocalStorage } from "../hooks/localstorage";
import backendInstance from "../utils/backendInstance";

type Status = "authenticated" | "unauthenticated" | "loading";

interface AuthContextProps {
  token: string;
  phoneNumber: string;
  role: "admin" | "user" | "loading";
  signIn: (token: string) => Promise<void>;
  signOut: () => void;
  status: Status;
}

const AuthContext = createContext({} as AuthContextProps);

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const [status, setStatus] = useState<Status>("loading");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [role, setRole] = useState<"admin" | "user" | "loading">("loading");

  const signIn = async (token: string) => {
    setToken(token);
  };

  const signOut = () => {
    backendInstance
      .post("/auth/logout", null, {
        headers: {
          Authorization: token,
        },
      })
      .finally(() => {
        setToken("");
        setStatus("unauthenticated");
        setPhoneNumber("");
      });
  };

  useEffect(() => {
    if (token === "") {
      setStatus("unauthenticated");
      return;
    }

    backendInstance
      .get("/auth/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        setPhoneNumber(response.data.phone);
        setRole(response.data.role);
        setStatus("authenticated");
      })
      .catch(() => {
        setStatus("unauthenticated");
        setToken("");
      });
  }, [token]);

  const value = {
    token,
    status,
    signIn,
    signOut,
    phoneNumber,
    role,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
