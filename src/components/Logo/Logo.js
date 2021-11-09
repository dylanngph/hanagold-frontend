import HamburgerCloseIcon from 'components/Svg/HamburgerCloseIcon';
import HamburgerIcon from 'components/Svg/HamburgerIcon';
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {Box} from "@mui/material";
import MenuButton from "components/Menu/MenuButton";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 15px;
`;
const FlexWrapper = styled(Box)`
  display: flex;
  height: 56px;
  padding-top: 20px;
  margin-bottom: 50px
`

const Logo = ({ isPushed, togglePush, isDark, href , isMobile }) => {
  const isAbsoluteUrl = href.startsWith("http");
  const innerLogo = (
      <>
        {isPushed && <img src="/hng-logo.png" width={isMobile ? "100px" : "140px"} />}
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
        {(isAbsoluteUrl) ? (
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
