import Flex from 'components/Box/Flex';
import Skeleton from 'components/Skeleton/Skeleton';
import Text from 'components/Text/Text';
import React from 'react';
import PropTypes from 'prop-types';

const Price = React.memo(({tokenPriceUsd}) => {
  return tokenPriceUsd ? (
      <Flex alignItems="center">
        <img
            src="tokens/ksc.png"
            width="32"
            height="32"
        />
        <Text
            fontSize={25}
            color="textSubtle"
            bold
            ml="2"
        >
          {`$${tokenPriceUsd.toFixed(3)}`}
        </Text>
      </Flex>
  ) : (
      <Skeleton width={80} height={24}/>
  );
});

Price.propTypes = {
  tokenPriceUsd: PropTypes.number.isRequired,
};

export default Price;