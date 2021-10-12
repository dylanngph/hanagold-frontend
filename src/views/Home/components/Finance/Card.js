import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperCard = styled.div`
  flex: 1;
  background: linear-gradient(270.15deg, rgb(255 255 248 / 20%) 0.13%,rgb(31 31 31) 99.88%);
  border-radius: 14px;
  padding: 30px;
  position: relative;
  margin: 10px 20px;
  min-width: 300px;
  color: ${ ({theme}) => theme.colors.text };
`

const CardFinance = ({children, ...props}) => {
  return (
      <WrapperCard {...props}>
        {children}
      </WrapperCard>
  );
};

CardFinance.propTypes = {
  children: PropTypes.any,
};

export default CardFinance;