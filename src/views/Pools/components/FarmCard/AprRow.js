import { ClipboardIcon } from '@heroicons/react/solid';
import ApyCalculatorModal from 'components/ApyCalculatorModal/ApyCalculatorModal';
import Flex from 'components/Box/Flex';
import useModal from 'components/Modal/useModal';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import { useKscPrice } from 'hooks/usePrice';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { tokenEarnedPerThousandDaily } from 'utils/index';

const StyledFlex = styled(Flex)`
  cursor: pointer;
  border-radius: 43px;
  padding: 15px 21px;
  border: 1px solid ${({theme, isFinished}) => isFinished ? theme.colors.text : theme.colors.secondary};
  justify-content: space-between;
  color: ${({theme}) => theme.colors.text};
  flex-wrap: wrap;

  svg {
    margin-left: 5px;
  }
`;

const AprRow = ({farm}) => {
  const kscPrice = useKscPrice()

  const [onPresentApyModal] = useModal(
      <ApyCalculatorModal
          tokenPrice={kscPrice}
          data={farm}
          tokenEarnedPerThousandDaily={tokenEarnedPerThousandDaily(farm.stakedTvl, farm.apr)}
          isFarm
      />,
  )

  return (
      <StyledFlex
          style={{ marginBottom: 14}}
          onClick={onPresentApyModal}
      >
        <Text>APR</Text>
        <Flex alignItems="center">
          {farm?.apr ? <Value value={farm.apr.yearlyAPR || 0} unit="%" decimals={0}/> : '- - -%'}
          <ClipboardIcon width="20px"/>
        </Flex>
      </StyledFlex>
  );
};

AprRow.propTypes = {
  farm: PropTypes.object,
};

export default AprRow;