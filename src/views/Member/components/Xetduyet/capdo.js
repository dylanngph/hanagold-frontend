
import Flex from 'components/Box/Flex';
import 'styles/index.css';
import styled from 'styled-components';
import Div1 from './div1';
const Myst = styled.div`
  width:100%;
`
function Capdo(){
    return(
        <Myst>
            <Flex justifyContent="center" flexWrap="wrap">
                <Div1></Div1>
         </Flex>
        </Myst>
        
    );
    
}

export default Capdo;
