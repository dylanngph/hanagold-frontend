import Flex from 'components/Box/Flex';
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import { useParams } from 'react-router-dom';
import { useFarmFromLpAddress, useFarmUser } from 'store/hooks';
import styled from 'styled-components';
import { getTokenName } from 'utils/tokenHelpers';
import Harvest from 'views/Farm/components/Harvest/Harvest';
import Stake from 'views/Farm/components/Stake/Stake';
import withAuthFarm from 'hoc/withAuthFarm';

const WrapperFlex = styled(Flex)`
  margin-top: 18px;
  flex-wrap: wrap;

  > div {
    min-width: 300px;
    min-height: 320px;
    margin-bottom: 40px;
    margin-right: 20px
  }
`;

const Farm = () => {
  const {lpAddress} = useParams();
  const farm = useFarmFromLpAddress(lpAddress);
  const userData = useFarmUser(farm?.pid);

  const lpTokenName = getTokenName(farm.symbol, farm?.t0?.symbol, farm?.t1?.symbol);

  return (
      <Page>
        <PageHeader
            logo="/hng-logo.png"
            title={`Deposit ${lpTokenName} Tokens and earn LTD`}
        />
        <WrapperFlex justifyContent="center">
          <Harvest farm={farm} earnings={userData.earnings}/>
          <Stake farm={farm} lpTokenName={lpTokenName} userData={userData}/>
        </WrapperFlex>
      </Page>
  );
};

export default withAuthFarm(Farm);
