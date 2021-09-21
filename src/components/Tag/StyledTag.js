import styled from "styled-components";
import { space, variant } from "styled-system";
import { scaleVariants, styleVariants } from "components/Tag/theme";
import { variants } from "./types";

const getOutlineStyles = ({ outline, theme, variant: variantKey = variants.PRIMARY }) => {
  if (outline) {
    const themeColorKey = styleVariants[variantKey].backgroundColor;
    const color = theme.colors[themeColorKey];

    return `
      color: ${color};
      background: transparent;
      border: 2px solid ${color};
    `;
  }

  return "";
};

 const StyledTag = styled.div`
  align-items: center;
  border-radius: 16px;
  color: #ffffff;
  display: inline-flex;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    filter: invert(99%) sepia(19%) saturate(125%) hue-rotate(
      82deg
      ) brightness(119%) contrast(100%);
  }

  ${variant({
    prop: "scale",
    variants: scaleVariants,
  })}
  ${variant({
    variants: styleVariants,
  })}
  ${space}

  ${getOutlineStyles}
`;

export default StyledTag