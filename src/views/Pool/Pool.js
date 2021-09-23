import Flex from 'components/Box/Flex';
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import { POOLS_TAGS } from 'constants/index';
import { useParams } from 'react-router-dom';
import withAuthPool from 'hoc/withAuthPool'
import { usePoolFromPid, usePoolUser } from 'store/hooks';
import styled from 'styled-components';
import { getPoolName } from 'utils/tokenHelpers';
import Harvest from 'views/Pool/components/Harvest/Harvest';
import HarvestV2 from 'views/Pool/components/Harvest/HarvestV2';
import Stake from 'views/Pool/components/Stake/Stake';

const WrapperFlex = styled(Flex)`
  margin-top: 18px;
  flex-wrap: wrap;

  > div {
    min-width: 300px;
    min-height: 320px;
    margin-bottom: 40px;
  }
`

const Pool = () => {
  const { pid } = useParams()
  const pool = usePoolFromPid(pid)
  const userData = usePoolUser(pool?.sousId, pool.isV2)

  const poolName = getPoolName(pool.isV2 ? pool.earningTokens : [pool.earningToken])

  return (
      <Page>
        <PageHeader
            logo="/logo.png"
            title={`${pool.tag === POOLS_TAGS.ifo ? 'Burn' : 'Deposit'} ${pool.stakingToken.symbol} Tokens and earn ${
                poolName
            }`}
            subTitle={
              (pool.tag === POOLS_TAGS.ifo &&
                  'This is an IFO Castle, your staked tokens will be burned, please make sure you understand the risk of Staking this Castle.')
            }
        />
        <WrapperFlex justifyContent="center">
          {pool.isV2 ? (
              <HarvestV2 pool={pool} earnings={userData.earnings} />
          ) : (
              <Harvest pool={pool} earnings={userData.earnings} />
          )}
          <Stake pool={pool} userData={userData} />
        </WrapperFlex>
      </Page>
  );
};

export default withAuthPool(Pool);