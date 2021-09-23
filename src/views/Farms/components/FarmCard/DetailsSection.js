import Flex from 'components/Box/Flex';
import LinkExternal from 'components/Link/LinkExternal';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import { useTranslation } from 'contexts/Localization';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Box} from '@mui/material'

const Wrapper = styled.div`
  padding: 20px;
`;

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
  color: #fff;
  &:hover {
    color: ${({theme}) => theme.colors.binance};
  }
`;
const PairSection = styled(Flex)`
  justify-content: space-between;
  margin-bottom: 5px
`
const DetailsSection = ({
  isFinished,
  linkProject,
  kaiAddress,
  linkExchange,
  addLiquidityUrl,
  lpLabel,
  totalStaked,
  stakingToken
}) => {
  const {t} = useTranslation();
  return (
      <Wrapper>
        <PairSection>
          <Box>Total Value Locked:</Box>
          <Box color="#85D7B6">$609,973,486</Box>
        </PairSection>
        <PairSection>
          {
            linkExchange && (
                <StyledLinkExternal href='#'>Get COIN CC LP</StyledLinkExternal>
            )
          }
           <StyledLinkExternal href='#'>See Pair Infor</StyledLinkExternal>
        </PairSection>
        {
          kaiAddress && (
              <StyledLinkExternal href={kaiAddress}>{t('View Contract')}</StyledLinkExternal>
          )
        }

      </Wrapper>
  );
};

DetailsSection.propTypes = {
  kaiAddress: PropTypes.string,
  linkExchange: PropTypes.string,
  addLiquidityUrl: PropTypes.string,
  lpLabel: PropTypes.string,
  linkProject: PropTypes.string,
  totalStaked: PropTypes.number,
  stakingToken: PropTypes.object,
  isFinished: PropTypes.bool,
};

export default DetailsSection;
