import Text from 'components/Text/Text';
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useCountUp } from 'react-countup'

const Value = ({ value, decimals, prefix = '', className, unit, onClick, ...props }) => {
  const { countUp, update } = useCountUp({
    start: 0,
    end: value,
    duration: 1,
    separator: ',',
    decimals: decimals !== undefined ? decimals : value < 0 ? 4 : value > 1e5 ? 0 : 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(value)
  }, [value, updateValue])

  return (
      <Text className={className} onClick={onClick}
          {...props}
      >
        {prefix}
        {countUp}&nbsp;
        {unit}
      </Text>
  )
}

Value.propTypes = {
  value: PropTypes.any,
  decimals: PropTypes.number,
  lineHeight: PropTypes.string,
  prefix: PropTypes.string,
  unit: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}

export default Value
