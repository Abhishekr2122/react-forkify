import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  /* border: 1px solid red; */
`;

const Styledsearchbar = styled.input`
  border-radius: 20px;
  padding: 15px;
  border-style: none;
  width: 100%;
`;
export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearchQuery(e) {
    setSearchQuery(e.target.value);
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
    </StyledForm>
  );
}
