import Snackbar from "../components/Snackbar";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Step 1: Create Snackbar Context
interface SnackbarContextType {
  showMessage: (
    message: string,
    duration?: number,
    mode?: "warning" | "success" | "error"
  ) => void;
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(
  undefined
);

// Step 2: Define Snackbar Provider
interface SnackbarProviderProps {
  children: ReactNode;
}

interface SnackbarState {
  message: string;
  duration: number;
  mode?: "warning" | "success" | "error";
  isVisible: boolean;
}

export const SnackbarProvider: React.FC<SnackbarProviderProps> = ({
  children,
}) => {
  const [snackbarState, setSnackbarState] = useState<SnackbarState>({
    message: "",
    duration: 3000,
    mode: "success",
    isVisible: false,
  });

  const showMessage = (
    message: string,
    duration = 3000,
    mode: "warning" | "success" | "error" = "success"
  ) => {
    setSnackbarState({ message, duration, mode, isVisible: true });
    setTimeout(() => {
      setSnackbarState((prevState) => ({ ...prevState, isVisible: false }));
    }, duration);
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      {snackbarState.isVisible && (
        <Snackbar
          message={snackbarState.message}
          duration={snackbarState.duration}
          mode={snackbarState.mode}
          onClose={() =>
            setSnackbarState((prevState) => ({
              ...prevState,
              isVisible: false,
            }))
          }
        />
      )}
    </SnackbarContext.Provider>
  );
};

// Step 3: Create useSnackbar Hook
export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (context === undefined) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
