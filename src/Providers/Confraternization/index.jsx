import { createContext, useState } from "react";
const initialValue = JSON.parse(localStorage.getItem("confraItems")) || [];

export const ConfraternizationContext = createContext();

export const ConfraternizationProvider = ({ children }) => {
  const [confraItems, setConfraItems] = useState(initialValue);

  return (
    <ConfraternizationContext.Provider value={{ confraItems, setConfraItems }}>
      {children}
    </ConfraternizationContext.Provider>
  );
};
