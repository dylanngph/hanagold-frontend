import Flex from 'components/Box/Flex';
import FlexLayout from 'components/Layout/Flex';
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import { TABS_LIVE } from 'constants/index';
import { useMemo, useState } from 'react';
import { useFarms, useFarmsOutside, usePools } from 'store/hooks';
import FarmTabButtons from 'views/Farms/components/FarmTabButtons/FarmTabButtons';
import FarmCard from 'views/Pools/components/FarmCard/FarmCard';
// import PoolCard from 'views/Pools/components/PoolCard/PoolCard';
import PoolsLiveTabButtons from 'views/Pools/components/PoolsLiveTabButtons';
import {Box , Button} from '@mui/material'
import styled from 'styled-components'
import { styled as MuiStyled } from '@mui/material/styles';
import {ReactComponent as InstructionLogo} from '../../instruction.svg'
import ViewButton from '../../components/ViewButton/ViewButton'
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import SearchBox from 'components/SearchInput/SearchBox';
import FilterBox from 'components/SearchInput/FilterBox';

const Pools = () => {
  const pools = usePools();
  const farms = useFarms()
  const [stakeOnly , setStakeOnly] = useState(true)
  const farmsOutside = useFarmsOutside()
  const [tabLive, setTabLive] = useState(TABS_LIVE.live);

  const handleChangeStake = (event) => {
    setStakeOnly(event.target.checked);
  };

  const handleChangeTab = (tabSelected) => {
    if (tabSelected !== tabLive) {
      setTabLive(tabSelected);
    }
  };

  // const poolsDisplay = useMemo(()=>{
  //   const poolsActive = pools.filter((pool) => !pool.isFarm)

  //   const poolsLive = poolsActive.filter((pool) => !pool.isFinished);

  //   const poolsFinished = poolsActive.filter((pool) => pool.isFinished);

  //   return tabLive === TABS_LIVE.live ? poolsLive : poolsFinished
  // },[pools, tabLive])


  // const farmsDisplay = useMemo(() => {
  //   const farmsLive = farms.filter((farm) => !farm.isFinished).filter(farm => farm.isPool);

  //   const farmsFinished = farms.filter((farm) => farm.isFinished);

  //   return tabLive === TABS_LIVE.live ? farmsLive : farmsFinished;
  // }, [farms, tabLive]);

  const farmsOutsideDisplay = useMemo(() => {
    const farmsLive = farmsOutside.filter((farm) => !farm.isFinished);

    const farmsFinished = farmsOutside.filter((farm) => farm.isFinished);

    return tabLive === TABS_LIVE.live ? farmsLive : farmsFinished;
  }, [farmsOutside, tabLive]);

  const Header = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 80px;
    ${`@media only screen and (max-width: 800px)`} {
      flex-direction: column;
      .earned-section {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
      };
      .earned-box {
        width: 100%;
        margin-top: 10px;
      };
      margin-top: 20px;
    }
  `
  const HelpButton = MuiStyled(Button)(({ theme }) => ({
    color: '#000',
    padding: '10px 32px 10px 32px', 
    backgroundColor: 'rgba(255,255,255)',
    '&:hover': {
      backgroundColor: 'rgba(255,255,255, .9)',
    },
  }))

  const HarvestButton = MuiStyled(Button)(({ theme }) => ({
    color: '#000',
    backgroundColor: '#FFC247',
    padding: '10px 32px 10px 32px',
    fontFamily: 'SFProTextBold',
    '&:hover': {
      backgroundColor: 'rgba(255, 194, 71, .7)',
    },
    '&:disabled': {
      backgroundColor: 'rgba(255,255,255, .4)',
      color: 'rgba(0,0,0, .5)'
    }
  }))

  return (
      <Page>
        <Header>
          <Box display="flex" flexDirection="column">
            <Box fontSize="48px" fontFamily="SFProTextBold" mb="10px" >Pool</Box>
            <Box fontSize="24px" fontFamily="SFProTextBold" color="rgba(255,255,255, .3)" mb="10px">Just stake some tokens to earn</Box>
            <Box fontSize="24px" fontFamily="SFProTextBold" color="rgba(255,255,255, .3)" mb="10px">High APR, low risk.  </Box>
          </Box>
          <Box className="earned-section" display="flex" alignItems="center">
            <Box mr="20px">
              <HelpButton variant="contained" startIcon={<InstructionLogo />}>
                Help
              </HelpButton>
            </Box>
            <Box className="earned-box" border="2px solid #868686" borderRadius="5px" padding="20px" width="405px">
              <Box mb="20px">VNDC Earned</Box>
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Box fontSize="24px" fontFamily="SFProTextBold">0.015</Box>
                  <Box fontSize="14px">~0.04 USD</Box>
                </Box>
                <HarvestButton disabled>Harvest</HarvestButton>
              </Box>
            </Box>
          </Box>
        </Header>
        
        <div style={{height: '100vh'}}>
        <Flex
                justifyContent = "space-between"
                style={{marginBottom: 18, padding: '5px'}}
            >
              <FilterSection >
                <Box className="desktop">
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
                  <Flex mr="40px" alignItems="center">
                    <FilterBox/>
                    <SearchBox/>
                  </Flex>
                </Box>
                <Box className="mobile">
                    <SearchBox/>
                    <FilterBox/>
                    <PoolsLiveTabButtons
                      onChange={handleChangeTab}
                      tab={tabLive}
                    />
                      <FormControlLabel
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        checked={stakeOnly}
                        onChange={handleChangeStake}
                        label="Stake Only"
                      />
                </Box>
              </FilterSection>
            </Flex>
          <FlexLayout>
            {/* {
              poolsDisplay.map((pool, index) => (
                  <PoolCard key={index} pool={pool}/>
              ))
            } */}
            {/* {
              farmsDisplay.map((farm, index) => (
                  <FarmCard key={index} farm={farm}/>
              ))
            } */}
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

  const FilterSection = styled(Box)`
    width: 100%;
    .desktop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${`@media (max-width: 1200px)`} {
        display: none;
      }
    }
    .mobile {
      display: none;
      ${`@media (max-width: 1200px)`} {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

  `
export default Pools;