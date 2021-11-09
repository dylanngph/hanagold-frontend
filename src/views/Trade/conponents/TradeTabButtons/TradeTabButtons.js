import ButtonMenu from 'components/ButtonMenu/ButtonMenu';
import ButtonMenuItem from 'components/ButtonMenu/ButtonMenuItem';
import { TABS } from 'constants/index';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    a{
        padding-left: 12px;
        padding-right: 12px;
    }

    ${({ theme }) => theme.mediaQueries.sm}{
        margin-left: 16px;
    }
`;

const Tab = styled.div`
	background: ${ ({theme, isActive}) => isActive ? '#FFC247' : 'rgba(255, 255, 255, .2)' };
	color: ${ ({theme, isActive}) => isActive ? '#000' : '#fff' };
	padding: 10px 20px;
	border-radius: 4px;
	transform: ${ ({isActive, isRight})=> isActive 
					? isRight 
									? 'translate(0,0)' 
									:  'translate(10px,0)':
					isRight
		? 'none'
									: 'translate(10px,0)'
					};
	cursor: pointer;
	font-family: SFProTextBold
`

const TradeTabButtons = ({tab, setTab}) => {

    return (
        <Wrapper>
            <Tab
                isActive={tab === TABS.swap}
                onClick={ () => setTab(TABS.swap) }
            >
                Swap
            </Tab>
            <Tab
                isRight
                isActive={tab === TABS.liquidity}
                onClick={ () => setTab(TABS.liquidity) }
            >
                Liquidity
            </Tab>
        </Wrapper>
    );
};

export default TradeTabButtons;