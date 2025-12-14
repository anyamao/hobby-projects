import React, { createContext, useContext, useState, ReactNode } from "react";

interface CRUDContext {
  isVisible: boolean;
  showCRUD: () => void;
  hideCRUD: () => void;
}

const CRUDContext = createContext<CRUDContext | undefined>(undefined);

export const useCRUD = () => {
  const context = useContext(CRUDContext);
  if (!context) {
    throw new Error("CCRUDContext error");
  }
  return context;
};

export const CRUDProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showCRUD = () => {
    setIsVisible(true);
  };
  const hideCRUD = () => setIsVisible(false);

  return (
    <CRUDContext.Provider value={{ isVisible, showCRUD, hideCRUD }}>
      {children}
    </CRUDContext.Provider>
  );
};
