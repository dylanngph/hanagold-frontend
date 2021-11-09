import Flex from 'components/Box/Flex';
import QuestionHelper from 'components/QuestionHelper';
import Text from 'components/Text/Text';
import styled from 'styled-components';

const StyledFlex = styled(Flex)`
  border-radius: 43px;
  padding: 15px 21px;
  margin-top: 9px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
    justify-content: space-between;
`

const FeesHarvest = ({pool}) => {
  return (
     <>
       {pool.feesHarvest && (
           <StyledFlex>
             <Text>Harvest fee</Text>
              <Flex >
               <Text> {pool.feesHarvest}%</Text>
                <QuestionHelper text={`${pool.feesHarvest}% harvest fee will be charged on your rewards`}/>
              </Flex>
           </StyledFlex>
       )}
     </>
  );
};

export default FeesHarvest;