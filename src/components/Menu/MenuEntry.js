import styled, { keyframes } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "config/index";

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div`
  flex-grow: 1;
  font-weight: 400;
  ${({isActive, theme }) => (isActive ? `color: #fff` : null)};
  ${({ isPushed, theme }) => (!isPushed ? `display: none` : null)}
`;

const MenuEntry = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary, isPushed }) => (secondary ? "0 32px" : isPushed ? "0 16px" : "5px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: ${({ theme }) => theme.colors.textSubtle};
  position: relative;
  border-right: ${({ isPushed }) => (!isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  
  &:before {
    background-color: ${({ theme }) => theme.colors.secondary};
    content: ${({ isActive, isPushed }) => (isActive && isPushed ? `""` : "none") };
    left: 0;
    width: 6px;
    height: 100%;
    position: absolute;
    border-radius: 0px 8px 8px 0px
  }

  ${({isActive, isPushed, theme }) => (isActive && `
  svg {
    filter: invert(99%) sepia(19%) saturate(125%) hue-rotate(82deg) brightness(119%) contrast(100%);
  }`)}

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ isActive, theme }) => (isActive ? theme.colors.secondary : "none") };
    border-radius: 14px;
    padding: 0 16px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
  isPushed: false
};

export { MenuEntry, LinkLabel };
