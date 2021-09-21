import React, { useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "config/index";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useEffect } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
`;

const AccordionContent = styled.div`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  border-color: ${({ isOpen, isPushed }) => (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent")};
  border-style: solid;
  border-width: 1px 0;
`;

const Accordion = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className} isActive={isActive} isPushed={isPushed}>
        {icon}
        <LinkLabel isActive={isActive} isPushed={isPushed}>{label}</LinkLabel>
        {isOpen ? <ChevronUpIcon width="16"/> : <ChevronDownIcon width="16"/>}
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
