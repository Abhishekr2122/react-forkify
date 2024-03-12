import { useState } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { useRecipe } from "../Context/RecipeProvider";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Styledsearchbar = styled.input`
  border-radius: 25px;
  padding: 15px;
  border-style: none;
  border: 1px solid #f9f5f3;

  &:focus {
    outline: 1px solid thistle;
  }
`;
export default function SearchBar() {
  const { searchQuery, setSearchQuery, searchRecipe, setSearchRecipe } =
    useRecipe();
  console.log("This is the search recipe", searchRecipe);
  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  function handleSearchRecipe(searchItem) {
    async function fetchRecipe() {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchItem}&key=a31bd9bf-bf6d-4507-9325-c12f37e7b17e`
      );

      const data = await res.json();

      setSearchRecipe(data);
    }

    fetchRecipe();
  }

  return (
    <StyledForm>
      <Styledsearchbar
        placeholder="Search over 1,000,000 recipes..."
        type="text"
        value={searchQuery}
        onChange={function (e) {
          handleSearchQuery(e);
        }}
      />

      <CiSearch
        style={{
          height: "22px",
          width: "22px",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "6px",
          cursor: "pointer",
        }}
        onClick={function () {
          if (searchQuery.length > 0) {
            handleSearchRecipe(searchQuery);
          }

          if (searchQuery.length > 0) {
            setSearchQuery("");
          }
        }}
      />
    </StyledForm>
  );
}
