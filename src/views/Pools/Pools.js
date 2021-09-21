import Flex from 'components/Box/Flex';
import FlexLayout from 'components/Layout/Flex';
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import { TABS_LIVE } from 'constants/index';
import { useMemo, useState } from 'react';
import { useFarms, useFarmsOutside, usePools } from 'store/hooks';
import FarmTabButtons from 'views/Farms/components/FarmTabButtons/FarmTabButtons';
import FarmCard from 'views/Pools/components/FarmCard/FarmCard';
import PoolCard from 'views/Pools/components/PoolCard/PoolCard';
import PoolsLiveTabButtons from 'views/Pools/components/PoolsLiveTabButtons';

const Pools = () => {
  const pools = usePools();
  const farms = useFarms()
  const farmsOutside = useFarmsOutside()
  const [tabLive, setTabLive] = useState(TABS_LIVE.live);

  const handleChangeTab = (tabSelected) => {
    if (tabSelected !== tabLive) {
      setTabLive(tabSelected);
    }
  };

  const poolsDisplay = useMemo(()=>{
    const poolsActive = pools.filter((pool) => !pool.isFarm)

    const poolsLive = poolsActive.filter((pool) => !pool.isFinished);

    const poolsFinished = poolsActive.filter((pool) => pool.isFinished);

    return tabLive === TABS_LIVE.live ? poolsLive : poolsFinished
  },[pools, tabLive])


  const farmsDisplay = useMemo(() => {
    const farmsLive = farms.filter((farm) => !farm.isFinished).filter(farm => farm.isPool);

    const farmsFinished = farms.filter((farm) => farm.isFinished);

    return tabLive === TABS_LIVE.live ? farmsLive : farmsFinished;
  }, [farms, tabLive]);

  const farmsOutsideDisplay = useMemo(() => {
    const farmsLive = farmsOutside.filter((farm) => !farm.isFinished);

    const farmsFinished = farmsOutside.filter((farm) => farm.isFinished);

    return tabLive === TABS_LIVE.live ? farmsLive : farmsFinished;
  }, [farmsOutside, tabLive]);

  return (
      <Page>
        <PageHeader
            logo="/logo.png"
            title="Non-term savings"
            subTitle="Stake tokens to earn tokens and unstake at any time"
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
              poolsDisplay.map((pool, index) => (
                  <PoolCard key={index} pool={pool}/>
              ))
            }
            {
              farmsDisplay.map((farm, index) => (
                  <FarmCard key={index} farm={farm}/>
              ))
            }
            {
              farmsOutsideDisplay.map((farm, index) => (
                  <FarmCard
                      isOutside
                      key={index} farm={farm}/>
              ))
            }
          </FlexLayout>
        </div>
      </Page>
  );
};

export default Pools;