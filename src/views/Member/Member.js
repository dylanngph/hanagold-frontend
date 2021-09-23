
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import styled from 'styled-components';
import Quytrinh from 'views/Member/components/Quytrinh/Quytrinh';
import Xetduyet from 'views/Member/components/Xetduyet/Xetduyet';
import Huyhieu from 'views/Member/components/Huyhieu/Huyhieu';
import Leveluser from 'views/Member/components/User/Leveluser';
const WrapperCard = styled.div`
  background: linear-gradient(128.36deg, rgba(255, 255, 255, 0.091) 12.77%, rgba(255, 255, 255, 0.013) 86.37%);
  border-radius: 20px;
  padding: 40px;
`
function Member() {
  return (
   <Page>
        <PageHeader
            styleTitle={{
              maxWidth: 800,
              margin: '0 auto'
            }}
            fontSizeTitle="30px"
            logo="/logo.png"
            title="Hệ thống partner và 
            level user của Livetrade"
        />
        <WrapperCard>
          <Quytrinh></Quytrinh>
          <Xetduyet></Xetduyet>
          <Huyhieu></Huyhieu>
        </WrapperCard>
        <Leveluser></Leveluser>
       
   </Page>
  );
}
export default Member;