import ApyCalculatorModal from 'components/ApyCalculatorModal/ApyCalculatorModal';
import Button from 'components/Button/Button';
import ExpandableSectionButton from 'components/ExpandableSectionButton/ExpandableSectionButton';
import useModal from 'components/Modal/useModal';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import useKardiachain from 'hooks/useKardiachain';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { getPoolAprForFarm } from 'utils/apr';
import { getBalanceNumber } from 'utils/formatBalance';
import { getUrlAddress, getUrlPair } from 'utils/getUrl';
import AprRow from 'views/Farms/components/AprRow';
import DetailsSection from 'views/Farms/components/FarmCard/DetailsSection';
import TokenPerDayRow from 'views/Farms/components/TokenPerDayRow';
import TvlRow from 'views/Farms/components/TvlRow';
import BlockCountdown from 'views/Pools/components/BlockCountdown';
import FeesHarvest from 'views/Pools/components/FeesHarvest';
import StakingLimitRow from 'views/Pools/components/StakingLimitRow';

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
`;

const PoolCard = ({pool}) => {
  const history = useHistory();
  const {account} = useKardiachain();
  const {stakingLimit} = pool;
  const [isView, setIsView] = useState(false);

  const earningToken = pool?.earningToken || pool?.earningTokens?.[0]

  const {yearlyAPR, monthlyAPR, weeklyAPR} = getPoolAprForFarm(pool.apr)

  const [onPresentApyModal] = useModal(
      <ApyCalculatorModal
          apr={pool?.apr}
          data={pool}
          earningTokenSymbol={earningToken?.symbol}
          tokenPrice={pool?.earningTokenPrice || pool?.earningTokensPrice?.[0]}
      />
  );

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
                src={`/tokens/${pool?.stakingToken.token0?.toLowerCase()}.png`}
                alt="logo"
            />
            <img
                style={{
                  position: 'absolute',
                  top: 0,
                  right: '48%'
                }}
                width="63"
                src={`/tokens/${pool?.stakingToken?.token1.toLowerCase()}.png`}
                alt="logo"
            />
          </LogoContainer>
          <Text bold color="secondary" fontSize="20px">{pool.stakingToken.symbol}</Text>
          <Text bold color="secondary" fontSize="20px">Stake {pool.stakingToken.symbol}</Text>
          <Text bold fontSize="20px">Earn {earningToken.symbol}</Text>
          {
            account
                ? <Button
                    width="100%"
                    mt="9px" mb="26px"
                    onClick={() => history.push(`/pool/${pool.sousId}`)}
                >Select</Button>
                : <UnlockButton mt="9px" mb="26px" width="100%"/>
          }
          <TokenPerDayRow userDailyRewards={pool?.userDailyRewards} tokenSymbol={earningToken.symbol}/>
          <FeesHarvest pool={pool}/>
          <AprRow yearlyAPR={yearlyAPR} weeklyAPR={weeklyAPR} monthlyAPR={monthlyAPR} onPresentApyModal={onPresentApyModal}/>
          <TvlRow stakedTvl={pool.stakedTvl}/>
          <StakingLimitRow stakingToken={pool.stakingToken} stakingLimit={stakingLimit}/>
          <BlockCountdown pool={pool}/>
          <ExpandableSectionButton
              onClick={() => setIsView(!isView)}
              expanded={isView}
          />
        </CardContainer>
        <ExpandingWrapper expanded={isView}>
          <DetailsSection
              kaiAddress={getUrlAddress(pool.stakingToken.address)}
              linkExchange={getUrlPair(pool.stakingToken.address)}
              lpLabel={`Get ${pool.stakingToken.symbol} LP`}
              addLiquidityUrl={`https://kaidex.io/portfolio/add/${pool.stakingToken.address}`}
          />
        </ExpandingWrapper>
      </FCard>
  );
};

PoolCard.propTypes = {
  pool: PropTypes.object.isRequired,
};

export default PoolCard;