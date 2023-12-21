import styled from "styled-components";
import Logo from "../ui/Logo";
import SearchBar from "../ui/SearchBar";
import ButtonIcon from "../ui/ButtonIcon";
import { FaRegEdit } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

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
  border: 1px solid red;
`;

const StyledActions = styled.div`
  display: flex;
  gap: 1rem;
  height: 50px;
`;
export default function Header() {
  return (
    <StyledHeader>
      <StyledProfile>
        <Logo />
        <p>Forkify</p>
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
