import React from "react";
import styled from "styled-components/macro";

import { WEIGHTS } from "../../constants";

function NavLink({ children, ...delegated }) {
  return (
    <Wrapper {...delegated}>
      <MainText>{children}</MainText>
      <HoverText aria-hidden={true}>{children}</HoverText>
    </Wrapper>
  );
}

const Wrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  display: block;
  /* 
    Text slide-up effect
  */
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;
  transform: translateY(var(--translate-from));
  transition: transform 0.5s;

  @media (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover & {
      transition: transform 0.25s;
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainText = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;
`;

const HoverText = styled(Text)`
  display: block;
  position: absolute;
  top: 0;
  font-weight: ${WEIGHTS.bold};
  --translate-from: 100%;
  --translate-to: 0%;
`;

export default NavLink;
