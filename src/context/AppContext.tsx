import React, { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  quizScore: number;
  setQuizScore: (score: number) => void;
  addToQuizScore: (value: number) => void;
  resetQuizScore: (value: number) => void;
  isModalOpen: boolean;
  isModalOpenUnlock: boolean;
  setIsModalOpen: (isOpen: boolean) => void;
  isModalOpenError: boolean;
  setIsModalOpenError: (isOpen: boolean) => void;
  setIsModalOpenUnLock: (isOpen: boolean) => void;
  isModalVisible: boolean;
  setModalVisible: (isVisible: boolean) => void;
  isVisibleModalComplet: boolean;
  setIsVisibleModalComplet: (isVisible: boolean) => void;
  textError: string;
  setTextError: (text: string) => void;
  currentCashValue: number;
  setCurrentCashValue: (value: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [quizScore, setQuizScore] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpenError, setIsModalOpenError] = useState<boolean>(false);
  const [isModalOpenUnlock, setIsModalOpenUnLock] = useState<boolean>(false);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [currentCashValue, setCurrentCashValue] = useState<number>(0);
  const [isVisibleModalComplet, setIsVisibleModalComplet] = useState<boolean>(false)
  const [textError, setTextError] = useState<string>('');

  const addToQuizScore = (value: number) => {
    setQuizScore((prevScore) => prevScore + value);
  };

  const resetQuizScore = (value: number) => {
    setQuizScore(value);
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
        isModalOpenError,
        isVisibleModalComplet,
        resetQuizScore,
        setTextError,
        textError,
        setIsVisibleModalComplet,
        setIsModalOpenError,
        isModalOpenUnlock,
        isModalVisible,
        setModalVisible,
        currentCashValue,
        setCurrentCashValue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
