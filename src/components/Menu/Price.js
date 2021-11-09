import Flex from 'components/Box/Flex';
import Skeleton from 'components/Skeleton/Skeleton';
import Text from 'components/Text/Text';
import React from 'react';
import PropTypes from 'prop-types'
import {Box} from '@mui/material'

const Price = React.memo(({tokenPriceUsd}) => {
  return tokenPriceUsd ? (
      <Box display="flex" justifyContent="center" width="100%" alignItems="center">
        <img
            src="tokens/hng.png"
            width="32"
            height="32"
        />
        <Text
            fontSize={25}
            color="primary"
            bold
            ml="2"
        >
          {`$${tokenPriceUsd.toFixed(3)}`}
        </Text>
      </Box>
  ) : (
      <Skeleton width={80} height={24}/>
  );
});

Price.propTypes = {
  tokenPriceUsd: PropTypes.number.isRequired,
};

export default Price;