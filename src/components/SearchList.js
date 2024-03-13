import styled from "styled-components";
import { useRecipe } from "../Context/RecipeProvider";
import { BiError } from "react-icons/bi";

function List({ data }) {}

function ErrorMessage() {
  return (
    <div>
      <BiError />
      <p>{`No recipes found for your query! Please try again ;)`}</p>
    </div>
  );
}

export default function SearchList() {
  const { searchRecipe, isLoading, searchQuery } = useRecipe();
  const { data, results } = searchRecipe;
  console.log(results);

  if (isLoading) {
    return (
      <div>
        <p>loading.....</p>
      </div>
    );
  }

  return <div></div>;
}
