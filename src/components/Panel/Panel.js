import React from "react";
import styled from "styled-components";
import PanelBody from "components/Panel/PanelBody";
import PanelFooter from "components/Panel/PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "config/index";
import Logo from 'components/Logo/Logo';


const StyledPanel = styled.div`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    background-color: transparent;
  }

  svg {
    margin-right: ${({ isPushed }) => isPushed ? 18 : 0}px;
  }
`;

const Panel = (props) => {
  const { isPushed, showMenu , links } = props;
  const homeLink = links.find((link) => link.label === 'Home');

  return (
      <StyledPanel isPushed={isPushed} showMenu={showMenu}>
        <Logo
              isPushed={isPushed}
              togglePush = {props.togglePush}
              isDark={props.isDark}
              href={homeLink?.href ?? '/'}
          />
        <PanelBody {...props} />
        <PanelFooter {...props} />
      </StyledPanel>
  );
};

export default Panel;
