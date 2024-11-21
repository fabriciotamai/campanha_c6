import React, { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  quizScore: number; // Pontuação total do quiz
  setQuizScore: (score: number) => void; // Atualiza diretamente o valor
  addToQuizScore: (value: number) => void; // Adiciona um valor à pontuação atual
  isModalOpen: boolean; // Estado para controle do modal
  setIsModalOpen: (isOpen: boolean) => void; // Função para abrir/fechar o modal
}

// Criação do contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider do contexto
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // Novo estado para o modal

  // Função para adicionar ao quizScore
  const addToQuizScore = (value: number) => {
    setQuizScore((prevScore) => prevScore + value);
  };

  return (
    <AppContext.Provider
      value={{
        quizScore,
        setQuizScore,
        addToQuizScore,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook para consumir o contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
