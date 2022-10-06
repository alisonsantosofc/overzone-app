import { createContext, ReactNode, useContext, useState } from "react";

interface DarkModeProviderProps {
  children: ReactNode;
}

interface DarkModeContextData {
  darkMode: boolean;
  handleSetDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextData>(
  {} as DarkModeContextData
);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);

  function handleSetDarkMode() {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, handleSetDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);

  return context;
}
