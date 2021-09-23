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

const FCard = styled.div`
  align-self: baseline;
  background: ${(props) => props.theme.card.background};
  border-radius: ${({theme}) => theme.radii.card};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
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
  position: relative;
  width: 100%;
  height: 63px;
  margin-bottom: 23px;

  img {
    padding: 5px;
    background: white;
    border-radius: 50%;
    height: 63px;
  }
`;

const ExpandingWrapper = styled.div`
  border-bottom-left-radius: ${({theme}) => theme.radii.card};
  border-bottom-right-radius: ${({theme}) => theme.radii.card};
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
        <LogoContainer>
            <img
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '48%'
                }}
                width="63"
                src={`/tokens/${farm?.token0?.symbol?.toLowerCase()}.png`}
                alt="logo"
            />
            <img
                style={{
                  position: 'absolute',
                  top: 0,
                  right: '48%'
                }}
                width="63"
                src={`/tokens/${farm?.token1?.symbol?.toLowerCase()}.png`}
                alt="logo"
            />
        </LogoContainer>
        <Text bold color="secondary" fontSize="20px">{lpTokenName}</Text>
        <Text bold color="secondary" fontSize="20px">Stake {lpTokenName}</Text>
        <Text bold fontSize="20px">Earn LTD ({mul}X)</Text>
        {
          account
              ? <Button
                  width="100%"
                  mt="9px" mb="26px"
                  onClick={() => history.push(`/farm/${farm.lpAddress}`)}
              >Select</Button>
              : <UnlockButton mt="9px" mb="26px" width="100%"/>
        }
        <TokenPerDayRow userDailyRewards={apr?.userDailyRewards} tokenSymbol={tokens.ltd.symbol}/>
        <AprRow yearlyAPR={apr?.yearlyAPR} weeklyAPR={apr?.weeklyAPR} monthlyAPR={apr?.monthlyAPR} onPresentApyModal={onPresentApyModal}/>
        <TvlRow stakedTvl={stakedTvl}/>
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

export default FarmCard;