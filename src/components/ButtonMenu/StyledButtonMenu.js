import styled from "styled-components";
import { variants } from "../Button/types";

const getBackgroundColor = ({ theme, variant }) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div`
  background: rgba(255,255,255,.2);
  border-radius: 40px;
  display: inline-flex;

  button{
    border-radius: 4px;
  }
  
  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
