"use client";
import { useState, useContext, createContext, ReactNode } from "react";

type SearchContextType = {
  searchProducts: string;
  setSearchProducts: (query: string) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchProducts, setSearchProducts] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchProducts, setSearchProducts }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
