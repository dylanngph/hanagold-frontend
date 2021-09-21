
import styled from 'styled-components';
import Userinfor from 'views/Member/components/User/Userinfo';
import Reawards from 'views/Member/components/User/Rewards';
import Medal from 'views/Member/components/User/Medal';
const Containeruser = styled.div`
  background-color:#30324fc4;
  border-radius: 20px;
  padding: 40px;
  margin: 20px;
`
function Leveluser (){
  
    return(
      <Containeruser>
         <Userinfor></Userinfor>
         <Reawards></Reawards>
         <Medal></Medal>
      </Containeruser>
    );
   
   
}

export default Leveluser;