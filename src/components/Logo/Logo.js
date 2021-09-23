import HamburgerCloseIcon from 'components/Svg/HamburgerCloseIcon';
import HamburgerIcon from 'components/Svg/HamburgerIcon';
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Flex from "components/Box/Flex";
import MenuButton from "components/Menu/MenuButton";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 130px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;
const FlexWrapper = styled(Flex)`
  height: 56px;
  padding-top: 10px;
  margin-bottom: 50px
`

const Logo = ({ isPushed, togglePush, isDark, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
      <>
        <img src="/logo.png" className="desktop-icon"/>
        <img src="/logo.png" className="mobile-icon"/>
      </>
  );

  return (
      <FlexWrapper>
        <MenuButton aria-label="Toggle menu" onClick={togglePush}>
          {isPushed ? (
              <HamburgerCloseIcon width="36px" color="#fff" />
          ) : (
              <HamburgerIcon width="36px" color="#fff" />
          )}
        </MenuButton>
        {isAbsoluteUrl ? (
            <StyledLink as="a" href={href} aria-label="Home page">
              {innerLogo}
            </StyledLink>
        ) : (
            <StyledLink to={href} aria-label="Home page">
              {innerLogo}
            </StyledLink>
        )}
      </FlexWrapper>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
