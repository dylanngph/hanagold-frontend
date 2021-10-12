import { ArrowRightIcon } from '@heroicons/react/solid';
import Flex from 'components/Box/Flex';
import { StakeIcon } from 'components/Menu/icons/index';
import Text from 'components/Text/Text';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const WrapperCard = styled.div`
  flex: 1;
  background: linear-gradient(112.44deg,#ffffffdb 44.76%,#a9c4ff 95.36%);
  border-radius: 10px;
  padding: 24px;
  position: relative;
  margin: 10px 20px;
  cursor: pointer;
  min-width: 300px;
  color: ${({theme}) => theme.colors.text};
`;

const EarnToken = () => {
  const history = useHistory();

  return (
      <WrapperCard onClick={() => history.push('/pools')}>
        <Flex justifyContent="flex-end">
          <ArrowRightIcon
              width="40"/>
        </Flex>
        <Text fontSize="40px" bold>Earn</Text>
        <Text fontSize="40px" color="secondary" bold>Extra Tokens</Text>
        <Text
            fontSize="30px"
            verticalAligh="top"
        ><span style={{verticalAlign: 'top'}}>in Stake</span></Text>
      </WrapperCard>
  );
};

export default EarnToken;