import { useState } from "react";
import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* width: auto; */
`;

const Styledsearchbar = styled.input`
  border-radius: 25px;
  padding: 15px;
  border-style: none;
  /* width: 100%; */
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
      <IoMdSearch
        style={{
          height: "25px",
          width: "25px",
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "4px",
        }}
      />
    </StyledForm>
  );
}
