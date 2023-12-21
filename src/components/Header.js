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
  background-color: blanchedalmond;
`;

const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const StyledActions = styled.div`
  display: flex;
  gap: 1rem;
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
        <ButtonIcon icon={<FaRegEdit />}>ADD RECEPIE</ButtonIcon>
        <ButtonIcon icon={<FaRegBookmark />}>BookMarks</ButtonIcon>
      </StyledActions>
    </StyledHeader>
  );
}
