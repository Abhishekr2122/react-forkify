import { createContext, useContext, useState } from "react";

const Recipe = createContext();

export default function RecipeProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchRecipe, setSearchRecipe] = useState([]);
  return (
    <Recipe.Provider
      value={{ searchQuery, setSearchQuery, searchRecipe, setSearchRecipe }}
    >
      {children}
    </Recipe.Provider>
  );
}

export function useRecipe() {
  const data = useContext(Recipe);
  return data;
}
