import React from "react";
import styled from "styled-components";
import PanelBody from "components/Panel/PanelBody";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "config/index";
import Logo from 'components/Logo/Logo';


const StyledPanel = styled.div`
  position: fixed;
  padding-top: 80px;
  top: 0;
  left: 0;
  display: ${({isPushed , isMobile}) => (!isPushed && isMobile) ? 'none' : 'flex' };
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({isPushed , isMobile}) => (isMobile && !isPushed) ? 'transparent' : '#202125' };
  height: 100vh;
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);

  ${({ theme }) => theme.mediaQueries.nav} {
    width: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }

  svg {
    margin-right: ${({ isPushed }) => isPushed ? 18 : 0}px;
  }

`;

const Panel = (props) => {
  const { isPushed ,showMenu, links , isMobile } = props;
  return (
      <StyledPanel isPushed={isPushed} showMenu={showMenu} isMobile={isMobile} >
        <PanelBody {...props} />
      </StyledPanel>
  );
};

export default Panel;
