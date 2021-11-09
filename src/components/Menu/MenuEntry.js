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
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-weight: 400;
  ${({isActive}) => (isActive ? `color: #FFC247` : null)};
  ${({ isPushed}) => (!isPushed ? `display: none` : null)}
`;

const MenuEntry = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.background : "transparent")};
  color: rgba(255, 255, 255, .5);
  position: relative;
  border-right: ${({ isPushed }) => (!isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  
  &:before {
    background-color: #F8CE46;
    content: ${({ isActive, isPushed }) => (isActive && isPushed ? `""` : "none") };
    left: 0;
    width: 6px;
    height: 100%;
    position: absolute;
  }
  ${({isActive}) => (isActive ? `
   .mobile-child {
    color: #FFC247;
  }`
  :
  null
  )}

  ${({ isPushed}) => (!isPushed ? `.mobile-child {margin-left: -15px}` : '.mobile-child {display: none}')}

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ isActive }) => (isActive ? 'rgba(248, 206, 70, .1)' : "none") };
    padding: 0 35px;
  }

  &:hover {
    background-color: rgba(248, 206, 70, .1);
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
