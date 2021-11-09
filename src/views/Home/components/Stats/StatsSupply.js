import Flex from 'components/Box/Flex';
import { TOTAL_CIRCULATION, WALLET_COMPANY } from 'config/index';
import { usePrimaryPrice } from 'hooks/usePrice';
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';
import { getERC20Contract } from 'utils/contractHelpers'
import { fetchBalanceOf } from 'utils/callHelpers'
import { useCallback, useState } from 'react';
import tokens from 'constants/tokens';
import { useEffect } from 'react';

const StatsSupply = () => {
  const contract = getERC20Contract()
  const DECIMALS = tokens.hng.decimals
  const [totalBalance, setTotalBalance] = useState(0)

  useEffect(async() => {
    const getBalance = await fetchBalanceOf(contract, tokens.hng.address, WALLET_COMPANY)
    const balance = getBalance / 10 ** DECIMALS
    setTotalBalance(TOTAL_CIRCULATION - balance)
  }, [contract, tokens.hng.address, WALLET_COMPANY])

  const primaryPrice = usePrimaryPrice();
  const totalSupplyPrice = primaryPrice ? primaryPrice * totalBalance : 0;

  return (
      <CardStats isBorderColor>
        <StyledTitle color="text">KRC20 Circulating Supply</StyledTitle>
        <Flex justifyContent="center">
          <StyledValue color="text" fontSize="50px" value={totalBalance} decimals={0} />
          <StyledText bold ml="1" fontSize="50px" color="text">HNG</StyledText>
        </Flex>
        <Flex justifyContent="center">
          <StyledText ml="1" fontSize="50px" color="text">$</StyledText>
          <StyledValue
              color="text"
              fontSize="50px"
              value={totalSupplyPrice}
              decimals={0}
          />
        </Flex>
      </CardStats>
  );
};

export default StatsSupply;