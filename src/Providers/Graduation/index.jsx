import { createContext, useState } from "react";
const initialValue = JSON.parse(localStorage.getItem("graduationItems")) || [];

export const GraduationContext = createContext();

export const GraduationProvider = ({ children }) => {
  const [graduationItems, setGraduationItems] = useState(initialValue);

  return (
    <GraduationContext.Provider value={{ graduationItems, setGraduationItems }}>
      {children}
    </GraduationContext.Provider>
  );
};
