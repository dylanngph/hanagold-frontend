import { useState } from "react";
import styled from "styled-components";
import Text from "components/Text/Text";
import { DocumentDuplicateIcon } from '@heroicons/react/outline';

const StyleButton = styled(Text).attrs({ role: "button" })`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`;

const Tooltip = styled.div`
  display: ${({ isTooltipDisplayed }) => (isTooltipDisplayed ? "block" : "none")};
  position: absolute;
  bottom: -22px;
  right: 0;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.contrast};
  color: ${({ theme }) => theme.colors.invertedContrast};
  border-radius: 16px;
  opacity: 0.7;
`;

const CopyToClipboard = ({ toCopy, children, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  return (
    <StyleButton
      small
      bold
      onClick={() => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(toCopy);
          setIsTooltipDisplayed(true);
          setTimeout(() => {
            setIsTooltipDisplayed(false);
          }, 1000);
        }
      }}
      {...props}
    >
      {children}
      <DocumentDuplicateIcon width="20" style={{ marginLeft: 4 }} />
      <Tooltip isTooltipDisplayed={isTooltipDisplayed}>Copied</Tooltip>
    </StyleButton>
  );
};

export default CopyToClipboard;
