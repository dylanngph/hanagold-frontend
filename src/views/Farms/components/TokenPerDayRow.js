import Flex from 'components/Box/Flex';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  border-radius: 43px;
  padding: 15px 21px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
    justify-content: space-between;
`;

const TokenPerDayRow = ({userDailyRewards, tokenSymbol}) => {
  return (
      <StyledFlex>
        <Text>{tokenSymbol} per day</Text>
        <Value decimals={0} value={userDailyRewards ? +userDailyRewards : 0} />
      </StyledFlex>
  );
};

export default TokenPerDayRow;