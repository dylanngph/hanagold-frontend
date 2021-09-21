import IconButton from 'components/Button/IconButton';
import Text from 'components/Text/Text';
import styled from "styled-components";
import Flex from "../Box/Flex";
import {  variants } from "./types";
import {CheckCircleIcon, InformationCircleIcon, ExclamationCircleIcon, XIcon} from '@heroicons/react/solid';

const getThemeColor = ({ theme, variant = variants.INFO }) => {
  switch (variant) {
    case variants.DANGER:
      return theme.colors.failure;
    case variants.WARNING:
      return theme.colors.warning;
    case variants.SUCCESS:
      return theme.colors.success;
    case variants.INFO:
    default:
      return theme.colors.secondary;
  }
};

const getIcon = (variant = variants.INFO) => {
  switch (variant) {
    case variants.DANGER:
      return ExclamationCircleIcon;
    case variants.WARNING:
      return ExclamationCircleIcon;
    case variants.SUCCESS:
      return CheckCircleIcon;
    case variants.INFO:
    default:
      return InformationCircleIcon;
  }
};

const IconLabel = styled.div`
  background-color: ${getThemeColor};
  border-radius: 16px 0 0 16px;
  color: ${({ theme }) => theme.alert.background};
  padding: 12px;
`;

const withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
const Details = styled.div`
  flex: 1;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: ${({ hasHandler }) => (hasHandler ? `${withHandlerSpacing}px` : "12px")};
  padding-top: 12px;
`;

const CloseHandler = styled.div`
  border-radius: 0 16px 16px 0;
  right: 8px;
  position: absolute;
  top: 8px;
`;

const StyledAlert = styled(Flex)`
  position: relative;
  background-color: ${({ theme }) => theme.alert.background};
  border-radius: 16px;
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
`;

const Alert = ({ title, children, variant, onClick }) => {
  const Icon = getIcon(variant);

  return (
    <StyledAlert>
      <IconLabel variant={variant} hasDescription={!!children}>
        <Icon color="currentColor" width="24px" />
      </IconLabel>
      <Details hasHandler={!!onClick}>
        <Text bold>{title}</Text>
        {typeof children === "string" ? <Text as="p">{children}</Text> : children}
      </Details>
      {onClick && (
        <CloseHandler>
          <IconButton scale="sm" variant="text" onClick={onClick}>
            <XIcon width="24px" color="currentColor" />
          </IconButton>
        </CloseHandler>
      )}
    </StyledAlert>
  );
};

export default Alert;
