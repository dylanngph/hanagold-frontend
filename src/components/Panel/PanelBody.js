
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { MenuEntry, LinkLabel } from "components/Menu/MenuEntry";
import MenuLink from "components/Menu/MenuLink";
import * as IconModule from "components/Menu/icons/index";


const Icons = IconModule;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

const PanelBody = ({ isPushed, pushNav, isMobile, links }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container>
      {links.map((entry) => {
        const Icon = Icons[entry.icon];
        const iconElement = <Icon width="17px" height="18px" mr="8px" />;

        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} isPushed={isPushed} >
            {/* <MenuLink href={entry.href} onClick={handleClick} target={entry.label === 'Trade' ? "_blank" : ""}> */}
            <MenuLink href={entry.href} onClick={handleClick}>
            <div className="mobile-child">{iconElement}</div>
              <LinkLabel
                isActive={entry.href === location.pathname}
                isPushed={isPushed}
                >
                  {iconElement}
                  {entry.label}
              </LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
