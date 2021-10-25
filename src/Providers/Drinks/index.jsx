import { createContext, useState } from "react";

export const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  return (
    <DrinksContext.Provider value={{ drinks, setDrinks }}>
      {children}
    </DrinksContext.Provider>
  );
};
