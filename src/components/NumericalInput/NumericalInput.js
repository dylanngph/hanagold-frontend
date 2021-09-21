import PropTypes from 'prop-types'
import { escapeRegExp } from 'utils/index'
import styled from "styled-components";

const inputRegex = RegExp(`^\\d*(?:\\\\[.])?\\d*$`) // match escaped "." characters via in a non-capturing group

const StyledInput = styled.input`
  width: 100%;;
  text-align: right;
  padding: 10px;
  border: 1px solid ${({theme}) => theme.colors.secondary};
  border-radius: 15px;
  font-size: 16px;
`

const NumericalInput = ({ value, onUserInput, placeholder = '0.0', ...rest }) => {
  const enforcer = (nextUserInput) => {
    if (nextUserInput === '' || inputRegex.test(escapeRegExp(nextUserInput))) {
      onUserInput(nextUserInput)
    }
  }

  return (
    <StyledInput
      {...rest}
      value={value}
      onChange={(event) => {
        enforcer(event.target.value.replace(/,/g, '.'))
      }}
      // universal input options
      inputMode="decimal"
      autoComplete="off"
      autoCorrect="off"
      // text-specific options
      type="text"
      pattern="^[0-9]*[.,]?[0-9]*$"
      placeholder={placeholder}
      minLength={1}
      maxLength={79}
      spellCheck="false"
    />
  )
}

NumericalInput.propTypes = {
  value: PropTypes.string,
  onUserInput: PropTypes.func,
  placeholder: PropTypes.string,
}

export default NumericalInput
