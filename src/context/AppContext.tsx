import React, { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  quizScore: number;
  setQuizScore: (score: number) => void;
  addToQuizScore: (value: number) => void;
  isModalOpen: boolean;
  isModalOpenUnlock: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  setIsModalOpenUnLock: (isOpen: boolean) => void;
  isModalVisible: boolean; // Adicionado
  setModalVisible: (isVisible: boolean) => void; // Adicionado
  currentCashValue: number; // Adicionado
  setCurrentCashValue: (value: number) => void; // Adicionado
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpenUnlock, setIsModalOpenUnLock] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false); // Estado do novo modal
  const [currentCashValue, setCurrentCashValue] = useState<number>(0); // Valor atual do prêmio

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
        setIsModalOpenUnLock,
        isModalOpenUnlock,
        isModalVisible, // Adicionado
        setModalVisible, // Adicionado
        currentCashValue, // Adicionado
        setCurrentCashValue, // Adicionado
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
