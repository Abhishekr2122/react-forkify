import styled from "styled-components";

const StyledButtonIcon = styled.button`
  background-color: aliceblue;
`;

export default function ButtonIcon({ children, icon }) {
  return (
    <StyledButtonIcon>
      {icon}
      {children}
    </StyledButtonIcon>
  );
}
