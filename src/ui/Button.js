import styled from "styled-components";

const StyledButton = styled.button`
  background-color: thistle;
  border: 1px solid yellow;
`;

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
