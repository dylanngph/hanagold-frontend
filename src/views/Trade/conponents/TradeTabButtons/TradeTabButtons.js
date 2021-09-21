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

const TradeTabButtons = ({tab, setTab}) => {

    return (
        <Wrapper>
            <ButtonMenu  variant="secondary"
                         activeIndex={tab === TABS.assets ? 0 : 1}
            >
                <ButtonMenuItem isActive={tab === TABS.assets}>
                    Digital Assets
                </ButtonMenuItem>
                <ButtonMenuItem isActive={tab === TABS.stocks}>
                    Tokenized Stocks
                </ButtonMenuItem>
            </ButtonMenu>
        </Wrapper>
    );
};

export default TradeTabButtons;