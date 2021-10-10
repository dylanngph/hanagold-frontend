import ApyCalculatorModal from 'components/ApyCalculatorModal/ApyCalculatorModal';
import Button from 'components/Button/Button';
import ExpandableSectionButton from 'components/ExpandableSectionButton/ExpandableSectionButton';
import useModal from 'components/Modal/useModal';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import tokens from 'constants/tokens';
import useKardiachain from 'hooks/useKardiachain';
import { useKscPrice } from 'hooks/usePrice';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getUrlAddress, getUrlPair } from 'utils/getUrl';
import { tokenEarnedPerThousandDaily } from 'utils/index';
import { getTokenName } from 'utils/tokenHelpers';
import styled from 'styled-components';
import AprRow from 'views/Farms/components/AprRow';
import DetailsSection from 'views/Farms/components/FarmCard/DetailsSection';
import TokenPerDayRow from 'views/Farms/components/TokenPerDayRow';
import TvlRow from 'views/Farms/components/TvlRow';
import {Box} from '@mui/material'
import {CheckmarkIcon , NumberOptionInput} from "../../../../components/Menu/icons/index";
import Divider from '@mui/material/Divider';
import Farm from 'views/Farm/Farm';


const FCard = styled.div`
  align-self: baseline;
  background: rgba(255, 255, 255, .1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  min-width: 300px;
`;

const CardContainer = styled.div`
  padding: 20px;
  padding-bottom: 12px;
`
const LabelContainer = styled.div`
  display: flex;
  margin-bottom: 15px
`

const ParameterSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px
`
const LogoContainer = styled.div`
  width: 100%;
  display: flex;

  img {
    padding: 5px;
    border-radius: 50%;
    height: 38px;
  }
`;

const ExpandingWrapper = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`

ExpandableSectionButton.propTypes = {
  onClick: PropTypes.func,
  expanded: PropTypes.any
};

const FarmCard = ({farm}) => {
  const history = useHistory();
  const {account} = useKardiachain();
  const [isView, setIsView] = useState(false);
  const lpTokenName = getTokenName(farm.symbol, farm?.t0?.symbol, farm?.t1?.symbol);
  const mul = farm?.allocPoint / 100;
  const stakedTvl = farm?.stakedTvl || 0
  const apr = farm?.apr
  const kscPrice = useKscPrice()


  
  const [onPresentApyModal] = useModal(
      <ApyCalculatorModal
          tokenPrice={kscPrice}
          data={farm}
          tokenEarnedPerThousandDaily={tokenEarnedPerThousandDaily(stakedTvl, apr)}
          isFarm
      />,
  )

  return (
      <FCard>
      <CardContainer>
        <LabelContainer>
          <LogoContainer>
              <img
                  width="38"
                  src={`/tokens/${farm?.token1?.symbol?.toLowerCase()}.png`}
                  alt="logo"
              />
              <img
                  width="38"
                  src={`/tokens/${farm?.token0?.symbol?.toLowerCase()}.png`}
                  alt="logo"
              />
          </LogoContainer>
          <Box
            width = "100%"
            display = "flex"
            alignItems = "flex-end"
            flexDirection = "column"
          >
            <Text bold color="primary" fontSize="14px">{farm.token1.symbol} - {farm.token0.symbol}</Text>
            <Box display="flex" mt="10px">
              <Box sx = {{
                backgroundColor: "rgba(216, 216, 216, .8)",
                padding: '5px 10px 5px 10px',
                borderRadius: '15px',
                color: '#525252',
                }}
                display = "flex"
                >
                <CheckmarkIcon />
                <div style={{
                  fontFamily: 'SFProTextBold',
                  fontSize: '14px',
                  marginLeft: '4px'
                  }}>Core</div>
              </Box>
              <Box style = {{
                  fontFamily: 'SFProTextBold',
                  fontSize: '14px',
                  marginLeft: '4px',
                  backgroundColor: "#868686",
                  padding: '5px',
                  borderRadius: '10px',
                  marginLeft: '15px'
                  }}
              >
                {mul}X
              </Box>
            </Box>
          </Box>
        </LabelContainer>
        <ParameterSection>
          <Text color="primary">APR:</Text>
          <Box display= "flex" alignItems="center">
            <NumberOptionInput onClick={onPresentApyModal} />
            <Box ml="10px" color="#85D7B6" >{ apr?.yearlyAPR }%</Box>
          </Box>
        </ParameterSection>
        <ParameterSection>
          <Text color="primary">Earn:</Text>
          <Box display= "flex" alignItems="center">
            <Text color="primary">HNG + Fees</Text>
          </Box>
        </ParameterSection>
  
        {
          account
              ? 
              <Farm lpAddress={farm.lpAddress} />
              // <WalletButton
              //     width="100%"
              //     mt="9px" mb="16px"
              //     onClick={() => history.push(`/farm/${farm.lpAddress}`)}
              // >
              //   Select
              // </WalletButton>
              : 
              <>
              <Text color="primary">COIN CC LP STAKED</Text>
              <UnlockWalletButton mt="9px" mb="16px" width="100%"/>
              </>
        }
        <Divider variant="middle" color="#fff" sx={{marginBottom: "16px"}} />
        {/* <TokenPerDayRow userDailyRewards={apr?.userDailyRewards} tokenSymbol={tokens.ltd.symbol}/>
        <AprRow yearlyAPR={apr?.yearlyAPR} weeklyAPR={apr?.weeklyAPR} monthlyAPR={apr?.monthlyAPR} onPresentApyModal={onPresentApyModal}/> */}
        <ExpandableSectionButton
            onClick={() => setIsView(!isView)}
            expanded={isView}
        />
      </CardContainer>
        <ExpandingWrapper expanded={isView}>
          <DetailsSection
              kaiAddress={getUrlAddress(farm.lpAddress)}
              linkExchange={getUrlPair(farm.lpAddress)}
              lpLabel={                farm?.t0?.symbol && farm?.t1?.symbol
                  ? `Get ${farm?.t0?.symbol}-${farm?.t1?.symbol} LP`
                  : ''
              }
              addLiquidityUrl={`https://kaidex.io/portfolio/add/${farm.lpAddress}`}
          />
        </ExpandingWrapper>
      </FCard>
  );
};

FarmCard.propTypes = {
  farm: PropTypes.object
};
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
const HarvestButton = styled(Button)`
  background-color: #31D0AA;
  color: #000;
  border-radius: 4px;
`
export default FarmCard;