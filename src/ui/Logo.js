import styled from "styled-components";

const StyledLogo = styled.img`
  height: 50px;
  width: 200px;
  padding: 10px;
`;

export default function Logo({ source }) {
  return <StyledLogo src={source} alt="nothing"></StyledLogo>;
}
