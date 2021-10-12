import Flex from 'components/Box/Flex';
import StatsPrice from 'views/Home/components/Stats/StatsPrice';
import StatsSupply from 'views/Home/components/Stats/StatsSupply';

const Stats = () => {
  return (
      <Flex mt="30px" flexWrap="wrap">
        <StatsSupply/>
        <StatsPrice/>
      </Flex>
  );
};

export default Stats;