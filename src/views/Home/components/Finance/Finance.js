import Flex from 'components/Box/Flex';
import StatsFinance from 'views/Home/components/Finance/StatsFinance';
import StatsTvl from 'views/Home/components/Finance/StatsTVL';

const Finance = () => {
  return (
      <Flex mt="40px" flexWrap="wrap">
        <StatsFinance/>
        <StatsTvl/>
      </Flex>
  );
};

export default Finance;