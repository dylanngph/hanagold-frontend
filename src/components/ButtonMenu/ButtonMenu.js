import React, { cloneElement, Children } from "react";
import StyledButtonMenu from "components/ButtonMenu/StyledButtonMenu";
import { scales, variants } from "components/Button/types";

const ButtonMenu = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  children,
}) => {
  return (
    <StyledButtonMenu variant={variant}>
      {Children.map(children, (child, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
        });
      })}
    </StyledButtonMenu>
  );
};

export default ButtonMenu;
