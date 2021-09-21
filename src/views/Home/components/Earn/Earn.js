import Flex from 'components/Box/Flex';
import EarnApr from 'views/Home/components/Earn/EarnApr';
import EarnToken from 'views/Home/components/Earn/EarnToken';

const Earn = () => {
  return (
      <Flex mt="40px" flexWrap="wrap">
        <EarnApr/>
        <EarnToken/>
      </Flex>
  );
};

export default Earn;