import Flex from 'components/Box/Flex';
import UserBlock from 'components/Menu/UserBlock';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Overlay from 'components/Overlay/Overlay';
import useMatchBreakpoints from 'hooks/useMatchBreakpoints';
import Logo from 'components/Logo/Logo';
import Panel from 'components/Panel/Panel';
import { throttle } from 'utils/index';
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from 'config/index';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1920px;
  display: block;
  margin: 0 auto;
`;

const StyledNav = styled.nav`
  position: fixed;
  top: ${({showMenu}) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  padding: 5px;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  z-index: 20;
  transform: translate3d(0, 0, 0);
  margin-top: 10px;
  width: 100%;
  max-width: 1920px;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div`
  flex-grow: 1;
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({theme}) => theme.mediaQueries.nav} {
    margin-left: ${({isPushed}) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({isPushed}) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({theme}) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const UikitMenu = ({
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  tokenPriceUsd,
  links,
  children
  }) => {
  const {isXl} = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  const homeLink = links.find((link) => link.label === 'Home');

  return (
      <Wrapper>
        <StyledNav showMenu={showMenu}>
          <Logo
              isPushed={isPushed}
              isMobile={isMobile}
              togglePush={() => setIsPushed((prevState) => !prevState)}
              isDark={isDark}
              href={homeLink?.href ?? '/'}
          />
          <div style={{
            marginRight: isMobile ? '10px' : '20px'
          }}>
            <UserBlock/>
          </div>
        </StyledNav>
        <BodyWrapper>
          <Panel
              isPushed={isPushed}
              isMobile={isMobile}
              showMenu={showMenu}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              tokenPriceUsd={tokenPriceUsd}
              pushNav={setIsPushed}
              links={links}
          />
          <Inner isPushed={isPushed} showMenu={showMenu} >
            {children}
          </Inner>
          <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation"/>
        </BodyWrapper>
      </Wrapper>
  );
};

export default UikitMenu;
