import { product, productType } from "@/hooks/types";
import React, {
  useContext,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";

type SearchProvidersProps = {
  children: React.ReactNode;
};

type SearchContextTypes = {
  filteredItems: product[] | null;
  setFilteredItems: Dispatch<SetStateAction<product[] | null>>;
};

const SearchContext = createContext<SearchContextTypes>({
  filteredItems: null,
  setFilteredItems: () => {},
});
export const useSearchContext = () => {
  return useContext(SearchContext);
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
