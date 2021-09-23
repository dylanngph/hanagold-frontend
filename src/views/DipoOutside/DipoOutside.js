import Page from 'components/Layout/Page';
import styled from 'styled-components';
import DipoInfor from './DipoInfor';
import OutsideTab from './OutsideTab/OutsideTab';
import HeaderDipo from 'views/DIPO/components/Header/Header';
const WrapperCard = styled.div`
background: linear-gradient(90.49deg, rgba(0, 0, 0, 0.1) 6.72%, rgba(0, 0, 0, 0.075) 77.46%);
margin-top:-2%;
`
function DipoOutside() {
  return (
   <Page>
       <HeaderDipo></HeaderDipo>
      <WrapperCard className="ml-3 mr-3 pb-4 vien">
        <DipoInfor></DipoInfor>
        <OutsideTab></OutsideTab>
      </WrapperCard>
   </Page>
  );
}
export default DipoOutside;