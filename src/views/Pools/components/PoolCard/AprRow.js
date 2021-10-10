import ApyCalculatorModal from 'components/ApyCalculatorModal/ApyCalculatorModal';
import Flex from 'components/Box/Flex';
import useModal from 'components/Modal/useModal';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import PropTypes from 'prop-types';
import { ClipboardIcon } from '@heroicons/react/solid';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${({theme}) => theme.colors.text};
  flex-wrap: wrap;

  svg {
    margin-left: 5px;
  }
`;

const AprRow = ({pool}) => {
  const [onPresentApyModal] = useModal(
      <ApyCalculatorModal
          apr={pool?.apr}
          data={pool}
          earningTokenSymbol={pool?.earningToken?.symbol}
          tokenPrice={pool?.earningTokenPrice}
      />
  );

  return (
      <StyledFlex onClick={()=>{
        if (!pool.isV2){
          onPresentApyModal()
        }
        }}
        isFinished={pool.isFinished}
      >
        <Text color="textWhite">APR:</Text>
        <Flex alignItems="center" >
          <span className="text-green-300">{pool?.apr ? <Value value={pool.apr || 0} unit="%" decimals={0}/> : '- - -%'}</span>
          <ClipboardIcon color="#fff" width="20px"/>
        </Flex>
      </StyledFlex>
  );
};

AprRow.propTypes = {
  pool: PropTypes.object.isRequired
};

export default AprRow;
