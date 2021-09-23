import Price from 'components/Menu/Price';
import SocialLinks from 'components/Menu/SocialLinks';
import IconButton from "../Button/IconButton";
import { CogIcon } from "../Svg";
import React from 'react';
import styled from 'styled-components';
import { MENU_ENTRY_HEIGHT } from 'config/index';
import ThemeSwitcher from 'components/Menu/ThemeSwitcher';
import LangSelector from 'components/Menu/LangSelector';

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: #202125;
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
  svg {
    margin-right: 10px !important;
  }
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter = ({
  isPushed,
  toggleTheme,
  isDark,
  tokenPriceUsd,
  currentLang,
  langs,
  setLang,
  pushNav
}) => {
  if (!isPushed) {
    return (
      <IconButton variant="text" onClick={() => pushNav(true)}>
        <CogIcon />
      </IconButton>
    );
  }

  return (
      <Container>
        <SocialEntry>
          <Price tokenPriceUsd={tokenPriceUsd}/>
        </SocialEntry>
        <SettingsEntry>
          {/*<ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme}/>*/}
          <LangSelector currentLang={currentLang} langs={langs} setLang={setLang}/>
          <SocialLinks />
        </SettingsEntry>
      </Container>
  );
};

export default PanelFooter;
