import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const StyledForm = styled.form`
  border: 1px solid red;
`;

const StyledInput = styled.input`
  background-color: beige;
`;

const StyledSearchButton = styled.button`
  border: px solid yellow;
`;

export default function SearchBar() {
  return (
    <StyledForm>
      <StyledInput placeholder="Search over 1,000,000 " />,
      <StyledSearchButton>
        <IoSearchOutline style={{ color: "white" }} />
        <p style={{ color: "white" }}>Search</p>
      </StyledSearchButton>
    </StyledForm>
  );
}
