import styled from "styled-components";
import SearchBar from "../ui/SearchBar";
import ButtonIcon from "../ui/ButtonIcon";
import { FaRegEdit } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import Logo from "../ui/Logo";
import { useEffect } from "react";

const StyledHeader = styled.header`
  border: "1px solid yellow";
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f9f5f3;
`;

const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  /* border: 1px solid red; */
`;

const StyledActions = styled.div`
  display: flex;
  gap: 1rem;
  height: 50px;
`;
export default function Header() {
  useEffect(function () {
    async function fetchRecipe() {
      const res = await fetch(
        "https://forkify-api.herokuapp.com/api/v2/recipes?search=pasta&key=a31bd9bf-bf6d-4507-9325-c12f37e7b17e"
      );

      const data = await res.json();

      console.log("This is the data related to the recipe", data);
    }

    fetchRecipe();
  }, []);
  return (
    <StyledHeader>
      <StyledProfile>
        <Logo source="/forkify-image.png" />
      </StyledProfile>
      <SearchBar />
      <StyledActions>
        <ButtonIcon
          icon={
            <FaRegEdit
              style={{
                color: "tomato",
                height: "30px",
                width: "25px",
              }}
            />
          }
        >
          ADD RECIPE
        </ButtonIcon>
        <ButtonIcon
          icon={
            <FaRegBookmark
              style={{ color: "tomato", height: "23px", width: "25px" }}
            />
          }
        >
          BOOKMARKS
        </ButtonIcon>
      </StyledActions>
    </StyledHeader>
  );
}
