import Flex from 'components/Box/Flex';
import Tag from 'components/Tag/Tag';
import Text from 'components/Text/Text';
import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Accordion from "components/Menu/Accordion";
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
        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

        if (entry.isComing) {
          return (
          <MenuEntry key={entry.label}
                           className={calloutClass}
                           disabled
                           isPushed={isPushed}
          >
              <Flex
                  style={{ width: '100%' }}
                  alignItems="center" justifyContent="space-between">
                  <Flex alignItems="center" justifyContent="space-between">
                    {iconElement}
                    <LinkLabel
                        disabled
                        isPushed={isPushed}>{entry.label}
                    </LinkLabel>
                  </Flex>
                <Tag
                    variant="textSubtle"
                    outline
                >Coming</Tag>
              </Flex>
          </MenuEntry>
          );
        }

        if (entry.items) {
          const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
          const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

          return (
            <Accordion
              key={entry.label}
              isPushed={isPushed}
              pushNav={pushNav}
              icon={iconElement}
              label={entry.label}
              initialOpenState={initialOpenState}
              className={calloutClass}
              isActive={entry.items.some((item) => item.href === location.pathname)}
            >
              {isPushed &&
                entry.items.map((item) => (
                  <MenuEntry key={item.href} secondary onClick={handleClick} isPushed={isPushed}>
                    <MenuLink href={item.href}>
                      <LinkLabel
                          isActive={item.href === location.pathname}
                          isPushed={isPushed}>{item.label}</LinkLabel>
                      </MenuLink>
                  </MenuEntry>
                ))}
            </Accordion>
          );
        }
        return (
          <MenuEntry key={entry.label} isActive={entry.href === location.pathname} isPushed={isPushed} className={calloutClass}>
            <MenuLink href={entry.href} onClick={handleClick}>
              {iconElement}
              <LinkLabel
                  isActive={entry.href === location.pathname}
                  isPushed={isPushed}>{entry.label}</LinkLabel>
            </MenuLink>
          </MenuEntry>
        );
      })}
    </Container>
  );
};

export default PanelBody;
