import Box from 'components/Box/Box';
import PropTypes from 'prop-types';

const Container = ({ children, ...props }) => (
  <Box px={['16px', '24px']} {...props}>
    <Box mx="auto">
      {children}
    </Box>
  </Box>
)

Container.propTypes = {
  children: PropTypes.any
};

export default Container
