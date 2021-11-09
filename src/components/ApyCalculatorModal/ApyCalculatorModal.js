import Box from 'components/Box/Box';
import Flex from 'components/Box/Flex';
import LinkExternal from 'components/Link/LinkExternal';
import Modal from 'components/Modal/Modal';
import Text from 'components/Text/Text';
import useTranslation from 'contexts/Localization/useTranslation';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { getRoi, tokenEarnedPerThousandDollarsCompounding } from 'utils/compoundApyHelpers';
import { formatNumberMinifiedCharacters } from 'utils/index';
import { TRADING_FEE } from 'config';
import { EXTERNAL_LINK_KAI } from 'constants/index';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-x: auto;
  color: ${({theme}) => theme.colors.text};
`;

const Table = styled.table`
  width: 100%;
`;

const BulletList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  div {
    display: inline;
  }

  li {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0;
  }

  li::before {
    content: '•';
    margin-right: 4px;
  }

  li::marker {
    font-size: 12px;
    color: ${({theme}) => theme.colors.textSubtle};
  }
`;

const ApyCalculatorModal = ({
    onDismiss,
    earningTokenSymbol = 'HNG',
    apr,
    tokenPrice,
    data,
    roundingDecimals = 2,
    compoundFrequency = 1,
    performanceFee = 0,
    tokenEarnedPerThousandDaily,
    isFarm = false
  }) => {
  const {t} = useTranslation();

  const oneThousandDollarsWorthOfToken = 1000 / tokenPrice;
  let tokenEarnedPerThousand1D = undefined;
  let tokenEarnedPerThousand7D = undefined;
  let tokenEarnedPerThousand30D = undefined;
  let tokenEarnedPerThousand365D = undefined;

  if (!isFarm) {
    tokenEarnedPerThousand1D = tokenEarnedPerThousandDollarsCompounding({
      numberOfDays: 1,
      farmApr: apr,
      tokenPrice,
      roundingDecimals,
      compoundFrequency,
      performanceFee
    });
    tokenEarnedPerThousand7D = tokenEarnedPerThousandDollarsCompounding({
      numberOfDays: 7,
      farmApr: apr,
      tokenPrice,
      roundingDecimals,
      compoundFrequency,
      performanceFee
    });
    tokenEarnedPerThousand30D = tokenEarnedPerThousandDollarsCompounding({
      numberOfDays: 30,
      farmApr: apr,
      tokenPrice,
      roundingDecimals,
      compoundFrequency,
      performanceFee
    });
    tokenEarnedPerThousand365D = tokenEarnedPerThousandDollarsCompounding({
      numberOfDays: 365,
      farmApr: apr,
      tokenPrice,
      roundingDecimals,
      compoundFrequency,
      performanceFee
    });
  } else {
    tokenEarnedPerThousand1D = tokenEarnedPerThousandDaily;
    tokenEarnedPerThousand7D = tokenEarnedPerThousandDaily * 7;
    tokenEarnedPerThousand30D = tokenEarnedPerThousandDaily * 30;
    tokenEarnedPerThousand365D = tokenEarnedPerThousandDaily * 365;
  }

  const linkGetToken = useMemo(() => {
    if (data?.t0?.symbol && data?.t1?.symbol) {
      return {
        link: EXTERNAL_LINK_KAI + `portfolio/add/${data?.lpAddress}`,
        label: `Get ${data?.t0?.symbol}-${data?.t1?.symbol} LP`
      };
    }
    if (data?.stakingToken?.symbol === 'DRAGON') {
      return {
        route: '/dragon',
        label: `Get ${data?.stakingToken?.symbol} Token`
      };
    }
    if (data?.stakingToken?.symbol) {
      return {
        label: `Get ${data?.stakingToken?.symbol} Token`,
        link: EXTERNAL_LINK_KAI + `exchange/${data?.addressBuy}`
      };
    }
    return null;
  }, [data]);

  const dataTable = [
    {
      label: '1d',
      roi: getRoi({amountEarned: tokenEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfToken}),
      tokenEarned: tokenEarnedPerThousand1D
    },
    {
      label: '7d',
      roi: getRoi({amountEarned: tokenEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfToken}),
      tokenEarned: tokenEarnedPerThousand7D
    },
    {
      label: '30d',
      roi: getRoi({amountEarned: tokenEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfToken}),
      tokenEarned: tokenEarnedPerThousand30D
    },
    {
      label: '365d (APY)',
      roi: getRoi({amountEarned: tokenEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfToken}),
      tokenEarned: tokenEarnedPerThousand365D
    }
  ];

  return (
      <Modal
          title={t('ROI')}
          onDismiss={onDismiss}
      >
        <Wrapper className="overflow-x-auto">
          <Table>
            <thead>
            <tr>
              <th className="p-1">
                <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase">
                  Timeframe
                </Text>
              </th>
              <th>
                <Text textAlign="right"
                      fontSize="12px"
                      bold
                      color="textSubtle"
                      textTransform="uppercase"
                      mr="12px"
                      ml="12px"
                      mb="12px">
                  ROI
                </Text>
              </th>
              <th>
                <Text textAlign="right" fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="12px">
                  {earningTokenSymbol} per $1,000
                </Text>
              </th>
            </tr>
            </thead>
            <tbody>
            {dataTable?.map((item, index) => {
              const roi = formatNumberMinifiedCharacters(item?.roi, roundingDecimals);
              const tokenEarned = formatNumberMinifiedCharacters(item?.tokenEarned, roundingDecimals);
              return (
                  <tr key={index}>
                    <td>
                      <Text>
                        {item?.label}
                      </Text>
                    </td>
                    <td>
                      <Text
                          textAlign="right"
                      >
                        {roi?.value}
                        {`${roi?.unit}%`}
                      </Text>
                    </td>
                    <td>
                      <Text
                          textAlign="right"
                      >
                        {tokenEarned?.value}
                        {`${tokenEarned?.unit}`}
                      </Text>
                    </td>
                  </tr>
              );
            })}
            </tbody>
          </Table>
          <Flex justifyContent="center">
            <Box mb="12px" mt="12px" maxWidth="280px" p="4px">
              <BulletList>
                <li>
                  <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                    {t('Calculated based on current rates.')}
                  </Text>
                </li>
                {
                  isFarm && data?.t1?.symbol && (
                      <li>
                        <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                          LP rewards: {TRADING_FEE}% trading fees, distributed proportionally among LP token holders.
                        </Text>
                      </li>
                  )
                }
                <li>
                  <Text fontSize="12px" textAlign="center" color="textSubtle" display="inline">
                    {t(
                        'All figures are estimates provided for your convenience only, and by no means represent guaranteed returns.'
                    )}
                  </Text>
                </li>
              </BulletList>
            </Box>
          </Flex>
          {linkGetToken?.link && (
              <Flex justifyContent="center">
              <LinkExternal small href={linkGetToken?.link} mr="16px">{linkGetToken?.label}</LinkExternal>
              </Flex>
          )}
        </Wrapper>
      </Modal>
  );
};

ApyCalculatorModal.propTypes = {
  onDismiss: PropTypes.func,
  tokenPrice: PropTypes.number,
  earningTokenSymbol: PropTypes.string,
  linkLabel: PropTypes.string,
  linkHref: PropTypes.string,
  data: PropTypes.object,
  apr: PropTypes.number,
  isFarm: PropTypes.bool,
  roundingDecimals: PropTypes.number,
  compoundFrequency: PropTypes.number,
  performanceFee: PropTypes.number,
  tokenEarnedPerThousandDaily: PropTypes.number
};

export default ApyCalculatorModal;
