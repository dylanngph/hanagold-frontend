import PropTypes from 'prop-types'
import styled from 'styled-components';

const WrapperCard = styled.div`
  flex: 1;
  background: ${(props) => props.theme.card.background};
  border-radius: ${({ theme, isPromotedFarm }) => (isPromotedFarm ? '31px' : theme.radii.card)};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  padding: 24px;
  position: relative;
  text-align: center;
  margin: 0 20px;
  color: ${ ({theme}) => theme.colors.text };
`

const Card = ({ children, ...props }) => {
  return (
    <WrapperCard
      {...props}
    >
      {children}
    </WrapperCard>
  )
}

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
