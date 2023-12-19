import styled from "styled-components";

const StyledLogo = styled.img``;

export default function Logo({ source, borderRadius }) {
  return (
    <StyledLogo
      src={source}
      alt="nothing"
      style={{ borderRadius: `${borderRadius}` }}
    ></StyledLogo>
  );
}
