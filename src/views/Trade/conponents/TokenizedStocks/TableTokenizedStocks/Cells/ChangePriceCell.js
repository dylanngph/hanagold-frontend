import { formatNumber } from 'utils/formatBalance';

const ChangePriceCell = ({trade}) => {
  const isUp =  Number.parseFloat(trade?.market?.info?.changeBod) * 100 > 0

  return (
      <div>
        <p
        className={isUp ? 'text-green1' : 'text-red1'}
        >{formatNumber(Number.parseFloat(trade?.market?.info?.changeBod) * 100, 2, 2)}%</p>
      </div>
  );
};

export default ChangePriceCell;