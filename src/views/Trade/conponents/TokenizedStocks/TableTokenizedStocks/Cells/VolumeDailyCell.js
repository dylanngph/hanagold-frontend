import { formatNumber } from 'utils/formatBalance';

const VolumeDailyCell = ({trade}) => {
  return (
      <div>
        <p>${formatNumber(Number.parseFloat(trade?.market?.info?.volumeUsd24h), 2, 2)}</p>
      </div>
  );
};

export default VolumeDailyCell;