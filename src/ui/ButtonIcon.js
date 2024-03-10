import styled from "styled-components";

const StyledButtonIcon = styled.button`
  background-color: aliceblue;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export default function ButtonIcon({ children, icon }) {
  return (
    <StyledButtonIcon>
      {icon}
      {children}
    </StyledButtonIcon>
  );
}
