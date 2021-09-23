import { TABS_LIVE } from 'constants/index';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 10px;

  a {
    padding-left: 12px;
    padding-right: 12px;
  }

  ${({theme}) => theme.mediaQueries.sm} {
    margin-left: 16px;
  }
`;

const Tab = styled.div`
  background: ${ ({theme, isActive}) => isActive ? theme.colors.secondary : theme.colors.tertiary };
  color: ${ ({theme, isActive}) => isActive ? theme.colors.invertedContrast : theme.colors.text };
  padding: 10px 20px;
  border-radius: 10px;
  transform: ${ ({isActive, isRight})=> isActive 
          ? isRight 
                  ? 'translate(0,0)' 
                  :  'translate(10px,0)':
          isRight
    ? 'none'
                  : 'translate(10px,0)'
           };
  cursor: pointer;
`

const PoolsLiveTabButtons = ({onChange, tab}) => {
  return (
      <Wrapper>
        <Tab
            isActive={tab === TABS_LIVE.live}
            onClick={ () => onChange(TABS_LIVE.live) }
        >
            Live
        </Tab>
        <Tab
            isRight
            isActive={tab === TABS_LIVE.finished}
            onClick={ () => onChange(TABS_LIVE.finished) }
        >
          Finished
        </Tab>
      </Wrapper>
  );
};

PoolsLiveTabButtons.propTypes = {
  onChange: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
};

export default PoolsLiveTabButtons;

