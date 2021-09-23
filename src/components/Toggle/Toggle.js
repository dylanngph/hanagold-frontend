import React from "react";
import StyledToggle, { Input, Handle } from "components/Toggle/StyledToggle";
import {  scales } from "./types";

const Toggle = ({ checked, scale = scales.MD, ...props }) => {
  const isChecked = !!checked;

  return (
    <StyledToggle checked={isChecked} scale={scale}>
      <Input checked={checked} scale={scale} {...props} type="checkbox" />
      <Handle scale={scale} />
    </StyledToggle>
  );
};

Toggle.defaultProps = {
  scale: scales.MD,
};

export default Toggle;
