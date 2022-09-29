import { createContext, ReactNode, useContext, useState } from "react";

interface LoadingProviderProps {
  children: ReactNode;
}

interface LoadingContextData {
  loading: boolean;
  handleSetLoading: () => void;
}

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [loading, setLoading] = useState(true);

  function handleSetLoading() {
    setLoading(!loading);
  };

  return (
    <LoadingContext.Provider value={{ loading, handleSetLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}
