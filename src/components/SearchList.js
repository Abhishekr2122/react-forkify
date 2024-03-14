import styled from "styled-components";
import { useRecipe } from "../Context/RecipeProvider";
import { BiError } from "react-icons/bi";

const StyledListContainer = styled.div`
  border: 1px solid yellow;
`;

function List({ data }) {}

function ErrorMessage() {
  return (
    <div>
      <BiError style={{ color: "tomato" }} />
      <p>{`No recipes found for your query! Please try again ;)`}</p>
    </div>
  );
}

export default function SearchList() {
  const { searchRecipe, isLoading, finalQuery } = useRecipe();
  const { data, results } = searchRecipe;
  console.log(results);

  if (isLoading) {
    return (
      <StyledListContainer>
        <p>loading.....</p>
      </StyledListContainer>
    );
  }

  if (!finalQuery) {
    return null;
  }

  return (
    <StyledListContainer>
      {results > 0 ? <List /> : <ErrorMessage />}
    </StyledListContainer>
  );
}
