import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import ToolTipCustom from 'components/Tooltip/Tooltip';
import styled from 'styled-components';

const StyledTooltip = styled.div`
  >svg{
    color: ${({ theme }) => theme.colors.text};
  }
`

const QuestionHelper = ({text, width}) => {
  return (
       <ToolTipCustom toolTipText={text}>
         <StyledTooltip>
           <QuestionMarkCircleIcon width={width || '20'} />
         </StyledTooltip>
       </ToolTipCustom>
  );
};

export default QuestionHelper;