import Flex from 'components/Box/Flex';
import { useKaiPrice, useKscPrice } from 'hooks/usePrice';
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';

const StatsPrice = () => {
  const kscPrice = useKscPrice();
  const kaiPrice = useKaiPrice() || 0;
  const ltdKaiPrice = Number.isNaN(kscPrice / kaiPrice) ? 0 : kscPrice / kaiPrice;

  return (
      <CardStats isBorderColor>
        <StyledTitle>LTD Price</StyledTitle>
        <Flex justifyContent="center">
          <StyledValue
              color="secondary"
              value={kscPrice || 0}
          />
          <StyledText ml="1" color="secondary">
            USD
          </StyledText>
        </Flex>
        <Flex justifyContent="center">
          <StyledValue value={ltdKaiPrice} color="secondary" decimals={2} />
          <StyledText
              color="secondary"
              fontSize="50px"
              ml="1">
            KAI
          </StyledText>
        </Flex>
      </CardStats>
  );
};

export default StatsPrice;