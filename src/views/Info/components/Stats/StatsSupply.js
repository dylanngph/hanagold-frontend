import Flex from 'components/Box/Flex';
import { TOTAL_CIRCULATION } from 'config/index';
import { useKscPrice } from 'hooks/usePrice';
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';

const StatsSupply = () => {
  const kscPrice = useKscPrice();
  const totalSupplyPrice = kscPrice ? kscPrice * TOTAL_CIRCULATION : 0;

  return (
      <CardStats isBorderColor>
        <StyledTitle>KRC20 Circulating Supply</StyledTitle>
        <Flex justifyContent="center">
          <StyledValue color="secondary" fontSize="50px" value={TOTAL_CIRCULATION} decimals={0} />
          <StyledText ml="1" fontSize="50px" color="secondary">KSC</StyledText>
        </Flex>
        <Flex justifyContent="center">
          <StyledText ml="1" fontSize="50px" color="secondary">$</StyledText>
          <StyledValue
              color="secondary"
              fontSize="50px"
              value={totalSupplyPrice}
              decimals={0}
          />
        </Flex>
      </CardStats>
  );
};

export default StatsSupply;