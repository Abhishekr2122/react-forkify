import { useState } from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

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

      <CiSearch
        style={{
          height: "22px",
          width: "22px",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "6px",
          cursor: "pointer",
        }}
      />
    </StyledForm>
  );
}
