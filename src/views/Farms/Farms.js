import Flex from 'components/Box/Flex';
import FlexLayout from 'components/Layout/Flex';
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import { TABS_LIVE } from 'constants/index';
import { useMemo, useState } from 'react';
import { useFarms, usePools } from 'store/hooks';
import FarmCard from 'views/Farms/components/FarmCard/FarmCard';
import FarmTabButtons from 'views/Farms/components/FarmTabButtons/FarmTabButtons';
import PoolCard from 'views/Farms/components/PoolCard/PoolCard';
import PoolsLiveTabButtons from 'views/Pools/components/PoolsLiveTabButtons';

const Farms = () => {
  const farms = useFarms();
  const pools = usePools();
  const [tabLive, setTabLive] = useState(TABS_LIVE.live);

  const handleChangeTab = (tabSelected) => {
    if (tabSelected !== tabLive) {
      setTabLive(tabSelected);
    }
  };

  const farmsDisplay = useMemo(() => {
    const farmsLive = farms.filter((farm) => !farm.isHide).filter(farm => !farm.isFinished).filter((farm)=> !farm?.isPool);

    const farmsFinished = farms.filter((farm) => farm.isFinished);

    return tabLive === TABS_LIVE.live ? farmsLive : farmsFinished;
  }, [farms, tabLive]);

  const poolsDisplay = useMemo(() => {
    const poolsActive = pools.filter((pool) => pool?.isFarm);

    const poolsLive = poolsActive.filter((pool) => !pool.isFinished);

    const poolsFinished = poolsActive.filter((pool) => pool.isFinished);

    return tabLive === TABS_LIVE.live ? poolsLive : poolsFinished;
  }, [pools, tabLive]);

  return (
      <Page>
        <PageHeader
            title="Supply liquidity and earn rewards"
            subTitle="Stake LP tokens to earn extra tokens"
        />
        <div>
          <Flex
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
              style={{marginBottom: 18}}
          >
            <FarmTabButtons/>
            <PoolsLiveTabButtons
                onChange={handleChangeTab}
                tab={tabLive}
            />
          </Flex>
          <FlexLayout>
            {
              farmsDisplay.map((farm, index) => (
                  <FarmCard key={index} farm={farm}/>
              ))
            }
            {
              poolsDisplay.map((pool, index) => (
                  <PoolCard key={index} pool={pool}/>
              ))
            }
          </FlexLayout>
        </div>
      </Page>
  );
};

export default Farms;