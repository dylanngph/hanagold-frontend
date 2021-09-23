import classnames from 'classnames';
import ArrowDownIcon from 'components/Svg/ArrowDownIcon';
import ArrowUpIcon from 'components/Svg/ArrowUpIcon';

const PriceNowCell = ({trade}) => {
  const isUp =  Number.parseFloat(trade?.market?.info?.changeBod) * 100 > 0

  return (
      <div className="flex items-center justify-end">
        <p className={classnames(isUp ? 'text-green1' : 'text-red1', 'mr-5')}
        >{trade?.market?.info?.price}</p>
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
      </div>
  );
};

export default PriceNowCell;