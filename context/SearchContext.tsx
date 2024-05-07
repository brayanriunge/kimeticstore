import { product, productType } from "@/hooks/types";
import React, { useContext, useState, createContext } from "react";

type SearchProvidersProps = {
  children: React.ReactNode;
};

type SearchContextTypes = {
  filteredItems: productType[] | null;
  setFilteredItems: React.Dispatch<React.SetStateAction<product[] | null>>;
};

const SearchContext = createContext<SearchContextTypes | undefined>(undefined);
export const useSearchContext = () => {
  useContext(SearchContext);
};

export const SearchProvider: React.FC<SearchProvidersProps> = ({
  children,
}) => {
  const [filteredItems, setFilteredItems] = useState<product[] | null>(null);
  return (
    <SearchContext.Provider
      value={{
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
