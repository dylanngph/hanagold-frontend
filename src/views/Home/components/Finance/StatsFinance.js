import Flex from 'components/Box/Flex';
import Text from 'components/Text/Text';
import Value from 'components/Value/Value';
import { TOTAL_SUPPLY } from 'config/index';
import CardFinance from 'views/Home/components/Finance/Card';

const StatsFinance = () => {
  return (
      <CardFinance>
        <Text textAlign="center" fontSize="30px" color="textWhite">All chain statistics</Text>
        <Flex justifyContent="space-between" mb="20px" mt="30px">
          <Text bold fontSize="20px" color="textWhite">Max Supply</Text>
          <Value fontSize="20px" bold color="secondary" value={TOTAL_SUPPLY} decimals={0}/>
        </Flex>
        <Flex justifyContent="space-between">
          <Text bold fontSize="20px" color="textWhite">Standards</Text>
          <Text fontSize="20px" bold color="secondary">BEP20, KRC20</Text>
        </Flex>
      </CardFinance>
  );
};

export default StatsFinance;