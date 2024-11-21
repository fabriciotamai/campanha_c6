import React, { createContext, useContext, useState } from "react";

// Interface do contexto
interface AppContextType {
  cartActive: boolean;
  setCartActive: (active: boolean) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedBrand: "Wella" | "Creamy" | "Eudora";
  setSelectedBrand: (brand: "Wella" | "Creamy" | "Eudora") => void;
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

// Valores padrão do contexto
const defaultContextValues: AppContextType = {
  cartActive: false,
  setCartActive: () => { },
  currentStep: 0,
  setCurrentStep: () => { },
  selectedBrand: "Wella",
  setSelectedBrand: () => { },
  isModalOpen: false,
  setIsModalOpen: () => { },
};

// Criação do contexto
const AppContext = createContext<AppContextType>(defaultContextValues);

// Provider do contexto
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartActive, setCartActive] = useState(defaultContextValues.cartActive);
  const [currentStep, setCurrentStep] = useState(defaultContextValues.currentStep);
  const [selectedBrand, setSelectedBrand] = useState<"Wella" | "Creamy" | "Eudora">(
    defaultContextValues.selectedBrand
  );
  const [isModalOpen, setIsModalOpen] = useState(defaultContextValues.isModalOpen);

  return (
    <AppContext.Provider
      value={{
        cartActive,
        setCartActive,
        currentStep,
        setCurrentStep,
        selectedBrand,
        setSelectedBrand,
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
