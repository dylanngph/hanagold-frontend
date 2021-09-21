import LanguageIcon from 'components/Svg/LanguageIcon';
import React from 'react';
import Text from "components/Text/Text";
import Dropdown from "components/Dropdown/Dropdown";
import Button from "components/Button/Button";
import MenuButton from "components/Menu/MenuButton";

const LangSelector = ({ currentLang, langs, setLang }) => (
  <Dropdown
    position="top-right"
    target={
      <Button
          scale="xs"
          variant="text"
              startIcon={<LanguageIcon
                  color="textSubtle"
                   size={24} />}
      >
        <Text color="textSubtle">{currentLang?.toUpperCase()}</Text>
      </Button>
    }
  >
    {langs.map((lang) => (
      <MenuButton
        key={lang.code}
        fullWidth
        onClick={() => setLang(lang)}
        // Safari fix
        style={{ minHeight: "32px", height: "auto" }}
      >
        {lang.language}
      </MenuButton>
    ))}
  </Dropdown>
);

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
