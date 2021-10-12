import Flex from 'components/Box/Flex';
import { TOTAL_CIRCULATION } from 'config/index';
import { usePrimaryPrice } from 'hooks/usePrice';
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';

const StatsSupply = () => {
  const primaryPrice = usePrimaryPrice();
  const totalSupplyPrice = primaryPrice ? primaryPrice * TOTAL_CIRCULATION : 0;

  return (
      <CardStats isBorderColor>
        <StyledTitle color="text">KRC20 Circulating Supply</StyledTitle>
        <Flex justifyContent="center">
          <StyledValue color="text" fontSize="50px" value={TOTAL_CIRCULATION} decimals={0} />
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