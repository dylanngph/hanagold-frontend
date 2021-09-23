import classnames from 'classnames';
import useModal from 'components/Modal/useModal';
import ArrowUpIcon from 'components/Svg/ArrowUpIcon';
import ArrowDownIcon from 'components/Svg/ArrowDownIcon';
import styled from 'styled-components';
import TradeStockModal from 'views/Trade/conponents/TradeStockModal/TradeStockModal';

const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const AssetsCell = ({trade}) => {
  const isUp = Number.parseFloat(trade?.market?.info?.changeBod) * 100 > 0;

  const [onPresentTradeModal] = useModal(<TradeStockModal trade={trade}/>)

  return (
      <Wrapper
      onClick={onPresentTradeModal}
      >
        <img src={trade?.thumbnail}
             style={{
               width: 30,
               height: 30
             }}
        />
        <p
            className={classnames(isUp ? 'text-green1' : 'text-red1', 'mx-5')}
        >{trade?.market?.base}</p>
        {
          isUp ? <ArrowUpIcon
              color="green"
              width="14px"
              height="14px"
          /> : <ArrowDownIcon
              color="red"
              width="14px"
              height="14px"
          />
        }
      </Wrapper>
  );
};

export default AssetsCell;