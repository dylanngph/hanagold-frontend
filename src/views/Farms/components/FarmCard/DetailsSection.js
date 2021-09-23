import Flex from 'components/Box/Flex';
import LinkExternal from 'components/Link/LinkExternal';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import { useTranslation } from 'contexts/Localization';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 13px;
  background: rgba(255, 255, 255, 0.1);
`;

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
  justify-content: center;

  &:hover {
    color: ${({theme}) => theme.colors.secondary};
  }
`;

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
        {
          stakingToken && <Flex justifyContent="center">
            <Text
                bold
                color={
                  isFinished ? 'text' : 'secondary'
                }
                  mr="1"
            >
              Total Staked: </Text>
            <Value
                bold
                mr="1"
                color={
                  isFinished ? 'text' : 'secondary'
                } value={Number.isNaN(totalStaked) ? 0 : totalStaked}/> <Text
              bold
              color={
            isFinished ? 'text' : 'secondary'
          }>{stakingToken.symbol}</Text>
          </Flex>
        }
        {
          lpLabel && (
              <StyledLinkExternal href={addLiquidityUrl}>{lpLabel}</StyledLinkExternal>
          )
        }
        {
          linkProject && (
              <StyledLinkExternal href={linkProject}>View Project Site</StyledLinkExternal>
          )
        }
        {
          kaiAddress && (
              <StyledLinkExternal href={kaiAddress}>{t('View Contract')}</StyledLinkExternal>
          )
        }
        {
          linkExchange && (
              <StyledLinkExternal href={linkExchange}>View Exchange</StyledLinkExternal>
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
