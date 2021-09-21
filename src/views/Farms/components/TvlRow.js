import Flex from 'components/Box/Flex';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  border-radius: 43px;
  padding: 15px 21px;
  border: 1px solid ${({theme}) => theme.colors.secondary};
  justify-content: space-between;
`;

const TvlRow = ({stakedTvl}) => {
  return (
      <StyledFlex style={{marginBottom: 14}}>
        <Text>TVL</Text>
        <Value prefix="$" value={stakedTvl ? +stakedTvl : 0}/>
      </StyledFlex>
  );
};

export default TvlRow;