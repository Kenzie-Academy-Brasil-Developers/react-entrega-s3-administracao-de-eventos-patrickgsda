import { ConfraternizationProvider } from "./Confraternization";
import { DrinksProvider } from "./Drinks";
import { GraduationProvider } from "./Graduation";
import { WeddingProvider } from "./Wedding";

const Providers = ({ children }) => {
  return (
    <ConfraternizationProvider>
      <WeddingProvider>
        <GraduationProvider>
          <DrinksProvider>{children}</DrinksProvider>
        </GraduationProvider>
      </WeddingProvider>
    </ConfraternizationProvider>
  );
};

export default Providers;
