import Flex from 'components/Box/Flex';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import styled from 'styled-components';
import { getBalanceNumber } from 'utils/formatBalance';

const StyledFlex = styled(Flex)`
  flex-wrap: wrap;
  border-radius: 43px;
  padding: 15px 21px;
  border: 1px solid ${({theme, isFinished}) => isFinished ? theme.colors.text : theme.colors.secondary};
  justify-content: space-between;
`;

const StakingLimitRow = ({stakingLimit, stakingToken}) => {
  if (stakingLimit && stakingLimit.gt(0)) {
    return  <StyledFlex style={{ marginBottom: 14}}>
      <Text>Limit per user</Text>
      <Flex alignItems="center">
        <Value decimals={0} value={getBalanceNumber(stakingLimit, stakingToken.decimals)}/>
        <Text ml="1">{stakingToken.symbol}</Text>
      </Flex>
    </StyledFlex>
  }

  return null
};

export default StakingLimitRow;