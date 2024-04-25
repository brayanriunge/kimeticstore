import { productType } from "@/hooks/types";
import { useState } from "react";
import { createContext } from "vm";

type SearchProvidersProps = {
  children: React.ReactNode;
};

type SearchContextTypes = {
  filteredItems: productType[] | null;
  setFilteredItems: React.Dispatch<React.SetStateAction<productType[] | null>>;
};

const SearchContext = createContext({} as SearchContextTypes);

export function useSearchContext(SearchContext: import("vm").Context) {
  return useSearchContext(SearchContext);
}

export default function SearchProvider({ children }: SearchProvidersProps) {
  const [filteredItems, setFilteredItems] = useState<productType[] | null>(
    null
  );
  return (
    <SearchContext.provider
      value={{
        filteredItems,
        setFilteredItems,
      }}
    >
      {children}
    </SearchContext.provider>
  );
}
