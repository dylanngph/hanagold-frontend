import Flex from 'components/Box/Flex';
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import { useParams } from 'react-router-dom';
import { useFarmFromLpAddress, useFarmUser , useFetchUserData } from 'store/hooks';
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

const Farm = ({lpAddress}) => {
  const farm = useFarmFromLpAddress(lpAddress);
  const userData = useFarmUser(farm?.pid);
  console.log("userData", userData)
  useFetchUserData(lpAddress)


  const lpTokenName = getTokenName(farm.symbol, farm?.t0?.symbol, farm?.t1?.symbol);

  return (
      <>
        <Harvest farm={farm} earnings={userData.earnings}/>
        <Stake farm={farm} lpTokenName={lpTokenName} userData={userData}/>
      </>
  );
};

export default Farm;
