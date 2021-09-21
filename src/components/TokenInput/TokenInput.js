import Button from 'components/Button/Button'
import NumericalInput from 'components/NumericalInput/NumericalInput'
import Text from 'components/Text/Text';
import PropTypes from 'prop-types'
import { getFullDisplayBalance } from 'utils/formatBalance'
import styled from "styled-components";

const StyledButton = styled(Button)`
  display: block;
  margin-left: auto;
`

const TokenInput = ({ symbol, max, onUserInput, value, onMax, currencyValue, decimals = 18 }) => {
  return (
    <div>
      <Text textAlign="right">
        {getFullDisplayBalance(max, decimals)} {symbol} Available
      </Text>
      <NumericalInput value={value} onUserInput={onUserInput} />
      <Text textAlign="right" fontSize="14px">{currencyValue}</Text>
      <StyledButton
          mt="2"
          scale="sm"
          onClick={onMax}
      >
        Max
      </StyledButton>
    </div>
  )
}

TokenInput.propTypes = {
  symbol: PropTypes.string.isRequired,
  onUserInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  max: PropTypes.any,
  onMax: PropTypes.func,
  currencyValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  decimals: PropTypes.number,
}

export default TokenInput
