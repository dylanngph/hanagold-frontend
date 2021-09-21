import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';
import Flex from 'components/Box/Flex';
import styled from 'styled-components';
import Text from 'components/Text/Text';
import Listhuyhieu from 'views/Member/components/Huyhieu/Listhuyhieu';
const Container=styled.div`
border-radius: 20px;
padding-top: 45px;
padding-bottom: 30px;
`

function Huyhieu (){
  
    return(
        <Container>
            <StyledTitle className="text-center">CÁC DANH HIỆU CHO USER</StyledTitle>
            <Text mb="4" textAlign="center" fontSize="16px">Ứng với các danh hiệu sẽ có các phần thưởng</Text>
            <Flex justifyContent="  space-between" flexWrap="wrap" style={{"max-width":"100%"}}>
                <Listhuyhieu></Listhuyhieu>
            </Flex>
        </Container>
           
    );
}

export default Huyhieu;
