import { productType } from "@/hooks/types";
import { useContext, useState, createContext } from "react";

type SearchProvidersProps = {
  children: React.ReactNode;
};

type SearchContextTypes = {
  filteredItems: productType[] | null;
  setFilteredItems: React.Dispatch<React.SetStateAction<productType[] | null>>;
};

const SearchContext = createContext({} as SearchContextTypes);
export const useSearchContext = () => useContext(SearchContext);

export default function SearchProvider({ children }: SearchProvidersProps) {
  const [filteredItems, setFilteredItems] = useState<productType[] | null>(
    null
  );
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
}
