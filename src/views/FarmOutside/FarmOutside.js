import Flex from 'components/Box/Flex';
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import withAuthFarmOutside from 'hoc/withAuthFarmOutside';
import { useParams } from 'react-router-dom';
import { useFarmOutsideFromLpAddress, useFarmOutsideUser } from 'store/hooks';
import styled from 'styled-components';
import { getTokenName } from 'utils/tokenHelpers';
import Stake from 'views/FarmOutside/components/Stake/Stake';
import Harvest from 'views/FarmOutside/components/Harvest/Harvest';

const WrapperFlex = styled(Flex)`
  margin-top: 18px;
  flex-wrap: wrap;

  > div {
    min-width: 300px;
    min-height: 320px;
    margin-bottom: 40px;
  }
`;

const FarmOutside = () => {
  const {lpAddress} = useParams();
  const farm = useFarmOutsideFromLpAddress(lpAddress);
  const userData = useFarmOutsideUser(farm?.pid);

  const lpTokenName = getTokenName(farm.symbol, farm?.t0?.symbol, farm?.t1?.symbol);

  return (
      <Page>
        <PageHeader
            logo="/hng-logo.png"
            title={`Deposit ${lpTokenName} Tokens and earn ${farm.earningToken.symbol}`}
        />
        <WrapperFlex justifyContent="center">
          <Harvest farm={farm} earnings={userData.earnings}/>
          <Stake farm={farm} lpTokenName={lpTokenName} userData={userData}/>
        </WrapperFlex>
      </Page>
  );
};

export default withAuthFarmOutside(FarmOutside);
