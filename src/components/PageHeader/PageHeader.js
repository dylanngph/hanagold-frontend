import Heading from 'components/Heading/Heading';
import Text from 'components/Text/Text';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledPageHeader = styled.div`
  position: relative;
  background: transparent;
  margin: 20px;
  margin-top: 0;
  >div, >h2{
    position: relative;
    z-index: 100;
  }
`;

const Logo = styled.img`
  margin-bottom: 10px;
  margin: 0 auto;
  position: relative;
  z-index: 100;

`

const Background = styled.img`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
  }
`

const PageHeader = ({ title, subTitle, fontSizeTitle = "30px" , styleTitle}) => {
  return (
    <StyledPageHeader>
      <Text
          as="h1"
          style={styleTitle}
          fontSize={fontSizeTitle} bold color="#fff">{title}</Text>
      <Text fontSize="16px" color="#ffffff4d">{subTitle}</Text>
    </StyledPageHeader>
  )
}

PageHeader.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  subOfSubTitle: PropTypes.string,
  fontSizeTitle: PropTypes.string,
}

export default PageHeader
