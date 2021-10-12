import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import styled from 'styled-components';
import Community from 'views/Home/components/Community/Community';
import Earn from 'views/Home/components/Earn/Earn';
import Finance from 'views/Home/components/Finance/Finance';
import ProductsServices from 'views/Home/components/ProductsServices/ProductsServices';
import Stats from 'views/Home/components/Stats/Stats';
import Flex from 'components/Box/Flex';
import Box from 'components/Box/Box';


const Wrapper = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: 900px;
  width: 100%;
  ${`@media only screen and (max-width: 600px)`} {
      flex-direction: column;
      height: 100%;
  }
`
const LeftBox = styled(Box)`
  width: 40%;
  ${`@media only screen and (max-width: 600px)`} {
      display: none;
  }
`
const RightBox = styled(Box)`
  width: 60%;
  padding: 30px;
  p {
    font-size: 18px;
    line-height: 32px;
  }
  h2 {
    font-size: 60px
  }
  ${`@media (max-width: 800px)`} {
    width: 100%;
    padding: 10px;
    margin-top: 50px;
    h2 {
      font-size: 40px;
    }
    p {
      font-size: 12px;
      line-height: 22px;
    }
  }
`
const DownloadSection = styled(Box)`
  margin-top: 30px;
  h4 {
    font-family: SFProTextBold;
    font-size: 21px;
  }
`
const DownloadButton = styled(Flex)`
  .item {
    margin-top: 20px;
    margin-right: 30px
  }
`
const Container = styled(Flex)`

`
const Home = () => {
  return (
      <Page>
        <PageHeader
          title="HANA GOLD"
          subTitle="AMM and yield farm on KardiaChain."
        />
        <Stats/>
        <Earn/>
        <Finance/>
      </Page>
  );
};

export default Home;