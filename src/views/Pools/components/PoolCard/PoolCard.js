import Flex from 'components/Box/Flex';
import Button from 'components/Button/Button';
import CardLogo, { CardLogoPool } from 'components/Card/CardLogo';
import ExpandableSectionButton from 'components/ExpandableSectionButton/ExpandableSectionButton';
import QuestionHelper from 'components/QuestionHelper';
import Text from 'components/Text/Text';
import UnlockButton from 'components/UnlockButton/UnlockButton';
import Value from 'components/Value/Value';
import useKardiachain from 'hooks/useKardiachain';
import {  useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getBalanceNumber } from 'utils/formatBalance';
import { getPoolName } from 'utils/tokenHelpers';
import DetailsSection from 'views/Farms/components/FarmCard/DetailsSection';
import AprRow from 'views/Pools/components/PoolCard/AprRow';
import BlockCountdown from 'views/Pools/components/BlockCountdown';
import BlockCountdownStake from 'views/Pools/components/BlockCountdownStake';
import StakingLimitRow from 'views/Pools/components/StakingLimitRow';
import Pool from 'views/Pool/Pool';

const FCard = styled.div`
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  text-align: center;
  min-width: 300px;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: end;

  img {
    padding: 5px;
    background: white;
    border-radius: 50%;
    height: 74px;
    width: 74px;
  }
`;

const StyledFlex = styled(Flex)`
  flex-wrap: wrap;
  border-radius: 43px;
  padding: 15px 21px;
  border: 1px solid ${({theme, isFinished}) => isFinished ? theme.colors.text : theme.colors.secondary};
  justify-content: space-between;
`;

const CardContainer = styled.div`
  position: relative;
  padding-bottom: 12px;
  border-radius: 14px;
  overflow: hidden;
`;

const ExpandingWrapper = styled.div`
  border-bottom-left-radius: ${({theme}) => theme.radii.card};
  border-bottom-right-radius: ${({theme}) => theme.radii.card};
  height: ${(props) => (props.expanded ? '100%' : '0px')};
  overflow: hidden;
`;

const Tag = styled.div`
  position: absolute;
  left: 24px;
  top: 24px;
  text-transform: capitalize;
  color: ${({theme}) => theme.colors.text};
  border: 1px solid ${({theme}) => theme.colors.text};
  padding: 10px;
  border-radius: 27px;
  font-size: 14px;
`;

const PoolCard = ({pool}) => {
  const history = useHistory();
  const {account} = useKardiachain();
  const {poolLimit, stakingLimit} = pool;
  const [isView, setIsView] = useState(false);
  console.log("pool", pool)
  const poolName = getPoolName(pool.isV2 ? pool.earningTokens : [pool.earningToken]);

  return (
      <FCard>
        <CardContainer>
          <div className="bg-primary p-3 px-5">
            <Tag>{pool.tag}</Tag>
            <LogoContainer>
              {
                pool.isV2
                    ? <CardLogoPool
                        src1={`/tokens/${pool?.earningTokens[0]?.symbol.toLowerCase()}.png`}
                        src2={`/tokens/${pool?.earningTokens[1]?.symbol.toLowerCase()}.png`}
                        src3={pool?.earningTokens[2] ? `/tokens/${pool?.earningTokens[2]?.symbol.toLowerCase()}.png` : ''}
                    />
                    : <CardLogo src1={`/tokens/${pool?.earningToken?.symbol.toLowerCase()}.png`}/>
              }
            </LogoContainer>
          </div>
          <div className="p-4">
          <AprRow pool={pool}/>
          {
            pool.isFinished
                ? (
                    <Text bold fontSize="20px">{pool?.earningToken?.symbol || poolName}</Text>
                ) : (
                    <div class="flex text-lg justify-between mt-3">
                      {/* <Text color="secondary">Stake {pool.stakingToken.symbol}</Text>
                      <Text color="textWhite">Earn: {pool.earningToken.symbol}</Text> */}
                      <span>Earn:</span>
                      <span>{pool.earningToken.symbol}</span>
                    </div>
                )
          }
          {
            account
                ? 
                  <>
                    <Pool pid={pool?.sousId} />
                  </>
                :
                  <UnlockButton mt="9px" mb="26px" width="100%"/>
          }
          {/* <StyledFlex
              isFinished={pool.isFinished}
              style={{marginTop: 14, marginBottom: 14}}>
            <Text>TVL</Text>
            <Value prefix="$" value={pool.stakedTvl ? +pool.stakedTvl : 0}/>
          </StyledFlex> */}
          {pool.fees && (
              <StyledFlex style={{marginTop: 14, marginBottom: 14}}>
                <Text>Fee</Text>
                <Flex alignItems="center"> <Text
                    style={{
                      marginRight: 5
                    }}
                >  {pool.fees}% in 72 hours</Text>
                  <QuestionHelper
                      text={
                        <>
                          <p>Unstaking fee: {pool.fees}%</p>
                          <p>
                            Only applies within 3 days of staking. Unstaking after 3 days will not include a fee. Timer
                            resets every time you stake in the pool.
                          </p>
                        </>
                      }
                  /></Flex>
              </StyledFlex>
          )}
          </div>
          <StakingLimitRow stakingToken={pool.stakingToken} stakingLimit={stakingLimit}/>
          {poolLimit && poolLimit.gt(0) && (
              <StyledFlex
                  isFinished={pool.isFinished}
                  style={{marginTop: 14, marginBottom: 14}}>
                <Text>Pool limit</Text>
                <Flex alignItems="center">
                  <Value value={getBalanceNumber(pool.poolLimit, pool.stakingToken.decimals)} decimals={0}/>
                  <Text ml="1">{pool.stakingToken.symbol}</Text>
                </Flex>
              </StyledFlex>
          )}
          <BlockCountdownStake pool={pool}/>
          <BlockCountdown pool={pool}/>
          <ExpandableSectionButton
              onClick={() => setIsView(!isView)}
              expanded={isView}
          />
        </CardContainer>
        <ExpandingWrapper expanded={isView}>
          <DetailsSection
              isFinished={pool.isFinished}
              linkProject={pool?.earningToken?.projectLink}
              linkExchange={`https://kaidex.io/exchange/${pool.addressBuy}`}
              stakingToken={pool.stakingToken}
              totalStaked={getBalanceNumber(pool.totalStaked, pool.stakingToken.decimals)}
              stakedTvl={pool.stakedTvl}
          />
        </ExpandingWrapper>
      </FCard>
  );
};

PoolCard.propTypes = {
  pool: PropTypes.object.isRequired
};

export default PoolCard;