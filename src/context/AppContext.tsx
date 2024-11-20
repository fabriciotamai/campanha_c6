import React, { createContext, useContext, useState } from "react";

// Interface para o endereço
interface Address {
  titulo?: string;
  local?: string;
  cep?: string;
  logradouro?: string;
  numero?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  referencia?: string;
  nome?: string;
}

// Interface para o contexto
interface AppContextType {
  cartActive: boolean;
  setCartActive: (active: boolean) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedBrand: "Wella" | "Creamy" | "Eudora";
  setSelectedBrand: (brand: "Wella" | "Creamy" | "Eudora") => void;
  address: Address | null; // Representa o endereço atual
  setAddress: (address: Address | null) => void; // Atualiza o endereço
}

// Valores padrão do contexto
const defaultContextValues: AppContextType = {
  cartActive: false,
  setCartActive: () => { },
  currentStep: 0,
  setCurrentStep: () => { },
  selectedBrand: "Wella",
  setSelectedBrand: () => { },
  address: null,
  setAddress: () => { },
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
  const [address, setAddress] = useState<Address | null>(defaultContextValues.address);

  return (
    <AppContext.Provider
      value={{
        cartActive,
        setCartActive,
        currentStep,
        setCurrentStep,
        selectedBrand,
        setSelectedBrand,
        address,
        setAddress,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar o contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
