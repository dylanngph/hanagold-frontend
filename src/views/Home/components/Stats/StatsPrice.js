import Flex from 'components/Box/Flex';
import { useKaiPrice, usePrimaryPrice } from 'hooks/usePrice';
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';

const StatsPrice = () => {
  const hngPrice = usePrimaryPrice();
  const kaiPrice = useKaiPrice() || 0;
  const pmrKaiPrice = Number.isNaN(hngPrice / kaiPrice) ? 0 : hngPrice / kaiPrice;

  return (
      <CardStats isBorderColor>
        <StyledTitle color="text">HNG Price</StyledTitle>
        <Flex justifyContent="center">
          <StyledValue
              color="text"
              value={hngPrice || 0}
          />
          <StyledText ml="1" color="text">
            USD
          </StyledText>
        </Flex>
        <Flex justifyContent="center">
          <StyledValue value={pmrKaiPrice} color="text" decimals={2} />
          <StyledText
              color="text"
              fontSize="50px"
              ml="1">
            KAI
          </StyledText>
        </Flex>
      </CardStats>
  );
};

export default StatsPrice;