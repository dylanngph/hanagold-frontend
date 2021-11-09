import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperCard = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 14px;
  padding: 35px;
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