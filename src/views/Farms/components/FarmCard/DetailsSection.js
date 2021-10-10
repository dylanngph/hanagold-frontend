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
  stakingToken,
  stakedTvl
}) => {
  const {t} = useTranslation();
  return (
      <Wrapper>
        <PairSection>
          <Box>Total Value Locked:</Box>
          <Box color="#85D7B6">
            <Value bold color={ isFinished ? 'text' : 'secondary' } value={Number.isNaN(stakedTvl) ? 0 : stakedTvl} prefix="$"/>
          </Box>
        </PairSection>
        {
          stakingToken && <div className="flex justify-between">
            <Text fontSize="15px" color={ isFinished ? 'text' : 'secondary' }>Total Staked: </Text>
            <div className="flex">
              <Value color={ isFinished ? 'text' : 'secondary' } value={Number.isNaN(totalStaked) ? 0 : totalStaked}/>
              <Text color={ isFinished ? 'text' : 'secondary'}>{ stakingToken.symbol }</Text>
            </div>
          </div>
        }
        <PairSection>
          {
            linkExchange && (
                <StyledLinkExternal href={addLiquidityUrl}>{ lpLabel }</StyledLinkExternal>
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
