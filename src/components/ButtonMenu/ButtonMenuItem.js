import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { variants } from "../Button/types";

const InactiveButton = styled(Button)`
  color: ${({ theme, colorKey }) => theme.colors[colorKey]};
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
