import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperCard = styled.div`
  width: 100%;
  flex: 1;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  > div{
    border-radius: 14px;
    background: linear-gradient(270.15deg, rgb(166 120 56) 0.13%,rgb(189 155 101) 99.88%);
    padding: 30px;
    min-width: 300px;

    ${({ theme }) => theme.mediaQueries.sm} {
      padding: 54px;
    }
  }
  color: ${ ({theme}) => theme.colors.text };
`

export const StyledTitle =  styled(Text)`
  font-size: 24px;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 30px;
  }
`

export const StyledValue =  styled(Value)`
  font-size: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
  }
`

export const StyledText =  styled(Text)`
  font-size: 32px;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 40px;
  }
`

const CardStats = ({children, isBorderColor = false}) => {
  return (
      <WrapperCard isBorderColor={isBorderColor}>
        <div>
          {children}
        </div>
      </WrapperCard>
  );
};

CardStats.propTypes = {
  children: PropTypes.any,
  isBorderColor: PropTypes.bool,
};

export default CardStats;