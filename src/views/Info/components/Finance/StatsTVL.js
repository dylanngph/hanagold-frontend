import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import useTotalValueLocked from 'hooks/useTotalValueLocked';
import CardFinance from 'views/Home/components/Finance/Card';

const StatsTvl = () => {
  const totalValueLocked = useTotalValueLocked()

  return (
      <CardFinance>
        <Text textAlign="center" fontSize="30px">Total Value Locked</Text>
        <Value
            mt="3"
            mb="3"
            prefix="$"
            textAlign="center"
            bold
            fontSize="34px"
            color="secondary"
            value={totalValueLocked.toNumber()}
            decimals={2}
        />
        <Text textAlign="center" bold fontSize="20px">Across all farming pairs and stakings</Text>
      </CardFinance>
  );
};

export default StatsTvl;