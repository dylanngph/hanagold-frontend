import { cloneElement, isValidElement } from "react";
import getExternalLinkProps from "utils/getExternalLinkProps";
import StyledButton from "components/Button/StyledButton";
import { scales, variants } from "components/Button/types";
import PropTypes from 'prop-types';

const Button =  (props) => {
  const { startIcon, endIcon, external, className, disabled, children, ...rest } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const classNames = className ? [className] : [];

  return (
    <StyledButton
      className={classNames.join(" ")}
      disabled={disabled}
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: "0.5rem",
          })}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            ml: "0.5rem",
          })}
      </>
    </StyledButton>
  );
};

Button.propTypes = {
  startIcon: PropTypes.element,
  endIcon: PropTypes.element,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
  external: PropTypes.any,
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
};

export default Button;
