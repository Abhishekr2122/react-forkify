import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const StyledForm = styled.form`
  border: 1px solid red;
`;

const StyledInput = styled.input`
  background-color: beige;
`;

const StyledSearchButton = styled.button`
  border: 1px solid yellow;
  display: flex;
  gap: 2rem;
  border-radius: 20px;
  height: 40px;
  width: 150px;
`;

export default function SearchBar() {
  return (
    <StyledForm>
      <StyledInput placeholder="Search over 1,000,000 " />,
      <StyledSearchButton>
        <IoSearchOutline style={{ color: "black" }} />
        <p style={{ color: "black" }}>SEARCH</p>
      </StyledSearchButton>
    </StyledForm>
  );
}
