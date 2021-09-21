import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { variants } from "../Button/types";

const InactiveButton = styled(Button)`
  background-color: transparent;
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const ButtonMenuItem  = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        variant="tertiary"
        colorKey="textSubtle"
        {...props}
      />
    );
  }

  return <Button as={as} {...props} />;
};

export default ButtonMenuItem;
