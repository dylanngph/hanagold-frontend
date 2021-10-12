import Flex from 'components/Box/Flex';
import { FarmIcon } from 'components/Menu/icons/index';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import { useMemo } from 'react';
import { useHistory } from 'react-router';
import { useFarms } from 'store/hooks';
import styled from 'styled-components';
import { ArrowRightIcon } from '@heroicons/react/solid';

const WrapperCard = styled.div`
  flex: 1;
  background: linear-gradient(270.15deg, rgb(255, 248, 225) 0.13%, rgb(255, 254, 244) 99.88%);
  border-radius: 10px;
  padding: 24px;
  position: relative;
  margin: 10px 20px;
  color: ${({theme}) => theme.colors.text};
  cursor: pointer;
  min-width: 300px;
`;

const EarnApr = () => {
  const farms = useFarms()
  const history = useHistory()

  const highestApr = useMemo(()=>{
    if (!farms[0]?.apr) return 0
    return  Math.max(...farms.map((farm) => farm.apr.yearlyAPR))
  },[farms])

  return (
      <WrapperCard onClick={() => history.push('/farms') }>
        <Flex justifyContent="flex-end">
          <ArrowRightIcon
              width="40"/>
        </Flex>
        <Text fontSize="40px" color="text" bold>Earn up to</Text>
        <Value
            value={highestApr}
            bold
            fontSize="40px"
            unit="%"
            decimals={2}
            color="secondary"
          />
        <Text
            fontSize="30px"
            color="text"
            verticalAligh="top"
        ><span style={{ verticalAlign: 'top' }}>APR in Farms</span></Text>
      </WrapperCard>
  );
};

export default EarnApr;