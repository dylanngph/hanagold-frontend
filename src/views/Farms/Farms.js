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
import styled from 'styled-components';
import { styled as MuiStyled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import ViewButton from '../../components/ViewButton/ViewButton'
import Switch from '@mui/material/Switch';
import {Box} from '@mui/material'
import SearchBox from 'components/SearchInput/SearchBox';
import FilterBox from 'components/SearchInput/FilterBox';

const Farms = () => {
  const farms = useFarms();
  const [stakeOnly , setStakeOnly] = useState(true)
  const pools = usePools();
  const [tabLive, setTabLive] = useState(TABS_LIVE.live);

  const handleChangeStake = (event) => {
    setStakeOnly(event.target.checked);
  };

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
        <Container>
          <Title>
            <h2>Farms</h2>
            <h4>Stake LP token to earn</h4>
          </Title>
          <div>
            <Flex
                justifyContent = "space-between"
                style={{marginBottom: 18, marginLeft: '35px', marginRight: '35px'}}
            >
              <Flex alignItems="center">
                <ViewButton/>
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                  checked={stakeOnly}
                  onChange={handleChangeStake}
                  label="Stake Only"
                />
                <PoolsLiveTabButtons
                    onChange={handleChangeTab}
                    tab={tabLive}
                />
              </Flex>
              <Flex>
                <FilterBox/>
                <SearchBox/>
              </Flex>
            </Flex>
            <FlexLayout>
              {console.log(farmsDisplay)}
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
        </Container>
      </Page>
  );
};
const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
`
const Container = styled(Flex)`
  flex-direction: column;
  padding: 10px;
  margin-top: 100px;
`

const IOSSwitch = MuiStyled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#333',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.2)' : '#fefefe',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #333',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(255,255,255,.3)' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
export default Farms;