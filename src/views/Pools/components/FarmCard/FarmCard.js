import Button from 'components/Button/Button';
import ExpandableSectionButton from 'components/ExpandableSectionButton/ExpandableSectionButton';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import tokens from 'constants/tokens';
import useKardiachain from 'hooks/useKardiachain';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUrlAddress, getUrlPair } from 'utils/getUrl';
import { getTokenName } from 'utils/tokenHelpers';
import styled from 'styled-components';
import DetailsSection from 'views/Farms/components/FarmCard/DetailsSection';
import TokenPerDayRow from 'views/Farms/components/TokenPerDayRow';
import TvlRow from 'views/Farms/components/TvlRow';
import AprRow from 'views/Pools/components/FarmCard/AprRow';
import {Box} from '@mui/material'
import {NumberOptionInput} from '../../../../components/Menu/icons/index'
import Divider from '@mui/material/Divider';
import {ReactComponent as FallbackIcon} from '../../../../setting-back.svg'
import {ReactComponent as ClockIcon} from '../../../../clock.svg'
import {ReactComponent as ShareIcon} from '../../../../share.svg'
import {ReactComponent as WalletIcon} from '../../../../wallet.svg'

const FCard = styled.div`
  align-self: baseline;
  background: rgba(255,255,255, .1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  min-width: 300px;
`;

const CardContainer = styled.div`
  padding: 24px;
  padding-bottom: 12px;
`

const LogoContainer = styled.div`
  img {
    padding: 5px;
    background: white;
    border-radius: 50%;
    height: 38px;
  }
`;

const ExpandingWrapper = styled.div`
  border-bottom-left-radius: ${({theme}) => theme.radii.card};
  border-bottom-right-radius: ${({theme}) => theme.radii.card};
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`
const HeaderCard = styled(Box)`
  display: flex;
  background-color: #FFC247;
  width: 100%;
  padding: 24px;
  color: #000;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
const Row = styled(Box)`
display: flex;
align-items: center;
justify-content: space-between;
`
const ColSection = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px
`
ExpandableSectionButton.propTypes = {
  onClick: PropTypes.func,
  expanded: PropTypes.any
};

const FarmCard = ({farm, isOutside}) => {
  const history = useHistory();
  const {account} = useKardiachain();
  const [isView, setIsView] = useState(false);
  const [isAuto , setIsAuto] = useState(true)

  const handleAuto = () => {
    if(isAuto) setIsAuto(false)
    else setIsAuto(true)
  }

  const lpTokenName = getTokenName(farm.symbol, farm?.t0?.symbol, farm?.t1?.symbol);
  const mul = farm?.allocPoint / 100;
  const stakedTvl = farm?.stakedTvl || 0
  const apr = farm?.apr

  return (
      <FCard>
        <HeaderCard>
            <Box display="flex" flexDirection="column" width="100%" alignItems="flex-start">
              <Box fontFamily="SFProTextBold" fontSize="24px">Auto {lpTokenName}</Box>
              <Box fontFamily="SFProTextBold">Automatic restaking</Box>
            </Box>
            
            <LogoContainer>
              <img
                  width="38"
                  src={`/tokens/${farm?.earningToken?.symbol.toLowerCase()}.png`}
                  alt="logo"
              />
            </LogoContainer>
        </HeaderCard>
        <CardContainer>
          <ColSection>
            <Row>
              <Box>APY: </Box>
              <Box display="flex" alignItems="center">
                <Box mr="10px" color="#85D7B6">106.81%</Box>
                <NumberOptionInput/>
              </Box>
            </Row>
          </ColSection>
          <ColSection>
            <Row>
              <Box>Earn: </Box>
              <Box display="flex" alignItems="center">
                <Box mr="10px">{farm.earningToken.symbol} + Fees</Box>
              </Box>
            </Row>
          </ColSection>
          <ColSection>
            {isAuto ? 
              <Box display="flex" flexDirection="column" textAlign="left" lineHeight="24px">
                <Box>Recent HNG Profit 0.1% unstaking fee if withdraw with in 72h</Box>
              </Box>
            :
              <Row>
                <Box display="flex" flexDirection="column" alignItems="flex-start">
                  <Box sx={{textTransform: 'uppercase' , fontSize: '12px' , marginBottom: '8px'}}>VNDC Earned</Box>
                  <Box fontSize="18px" fontFamily="SFProTextBold" mb="8px">106.81 USD</Box>
                  <Box>0 USD</Box>
                </Box>
                <Box display="flex" alignItems="center">
                  <CollectButton disabled>Collect</CollectButton>
                </Box>
              </Row>
            }
          </ColSection>
          
          {
            account
                ? <WalletButton
                    width="100%"
                    mt="9px" mb="20px"
                    onClick={() => {
                      if (isOutside){
                       return  history.push(`/farmOutside/${farm.lpAddress}`)
                      }
                      return history.push(`/farm/${farm.lpAddress}`)
                    }}
                >Select</WalletButton>
                : <UnlockWalletButton mt="9px" mb="20px" width="100%"/>
          }
          <Divider variant="middle" color="#fff" sx={{marginBottom: "16px" , marginLeft: 0 , marginRight: 0}} />
          <Box display="flex" justifyContent="space-between">
            <AutoButton
              onClick={handleAuto}
            >
              <Box mr="10px"><FallbackIcon/></Box>
              {isAuto ? 'Auto' : 'Manual'}
            </AutoButton>
            {console.log('Auto:' + isAuto)}
            <ExpandableSectionButton
                style={{
                            marginTop: 14
                }}
                onClick={() => setIsView(!isView)}
                expanded={isView}
            />
          </Box>
          
        </CardContainer>
        <ExpandingWrapper expanded={isView}>
          {/* <DetailsSection
              kaiAddress={getUrlAddress(farm.lpAddress)}
              linkExchange={getUrlPair(farm.lpAddress)}
              lpLabel={                farm?.t0?.symbol && farm?.t1?.symbol
                  ? `Get ${farm?.t0?.symbol}-${farm?.t1?.symbol} LP`
                  : ''
              }
              addLiquidityUrl={`https://kaidex.io/portfolio/add/${farm.lpAddress}`}
          /> */}
        <CardContainer>
          <ColSection>
            <Row>
              <Box>Total Locked Value: </Box>
              <Box color="#85D7B6">$609,973,486</Box>
            </Row>
          </ColSection>
          <ColSection>
            <Row>
              <Box>Performance Fee: </Box>
              <Box>2%</Box>
            </Row>
          </ColSection>
          <ColSection>
            <Row>
              <Box>Ends in: </Box>
              <Box display="flex">
                <Box mr="10px">1,373,324 blocks</Box> 
                <Box> <ClockIcon/> </Box>
              </Box>
            </Row>
          </ColSection>
          <LinkSection>
              <LinkItem>
                <a href="#">See Token Info</a>
                <Box ml="10px"><ShareIcon/> </Box>
              </LinkItem>
              <LinkItem>
                <a href="#">View Project Site</a>
                <Box ml="10px"><ShareIcon/> </Box>
              </LinkItem>
              <LinkItem>
                <a href="#">View Contract</a>
                <Box ml="10px"><ShareIcon/> </Box>
              </LinkItem>
              <WalletItem>
                <a href="#">Add to Wallet</a>
                <Box ml="10px"><WalletIcon/> </Box>
              </WalletItem>
          </LinkSection>
        </CardContainer>
        </ExpandingWrapper>
      </FCard>
  );
};

FarmCard.propTypes = {
  farm: PropTypes.object
};

const AutoButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border-radius: 4px;
  font-family: SFProTextBold;
  padding: 4px 16.5px;
  display: flex;
`

const WalletButton = styled(Button)`
  background-color: #FFC247;
  color: #000;
  border-radius: 4px;
  font-family: SFProTextBold
`
const UnlockWalletButton = styled(UnlockButton)`
  background-color: #FFC247;
  color: #000;
  border-radius: 4px;
  font-family: SFProTextBold
`
const CollectButton = styled(Button)`
  background-color: #85D7B6;
  color: #000;
  border-radius: 4px;
  font-family: SFProTextBold;
`
const LinkSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #0085FF;
`
const LinkItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  a {
    font-family: SFProTextBold
  };
  a:hover {
    text-decoration: underline
  }
`
const WalletItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: #FFC247;
  a {
    font-family: SFProTextBold
  };
  a:hover {
    text-decoration: underline
  }
`

export default FarmCard;