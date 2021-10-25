import { createContext, useState } from "react";
const initialValue = JSON.parse(localStorage.getItem("weddingItems")) || [];

export const WeddingContext = createContext();

export const WeddingProvider = ({ children }) => {
  const [weddingItems, setWeddingItems] = useState(initialValue);

  return (
    <WeddingContext.Provider value={{ weddingItems, setWeddingItems }}>
      {children}
    </WeddingContext.Provider>
  );
};
