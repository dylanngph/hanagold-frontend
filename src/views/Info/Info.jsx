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
        <Container>
          <Wrapper>
            <LeftBox>
              <img src="/images/mockup.png" alt="Mockup Image" width="100%" />
            </LeftBox>
            <RightBox>
              <h2 className="title">About HanaGold Token (HNG)</h2>
              <p>HanaGold jewelry joint stock company was established in 2020, is an innovative start-up enterprise in the field of gold, silver and gemstone. We apply 4.0 technology in business with a pioneering project called HanaGold.
Potential in the 4.0 technology era along with the need to use and invest in gold, HanaGold quickly flashed the opportunity to develop the gold industry in Vietnam according to an improved model compared to the traditional one, creating a breakthrough for gold business in Vietnam.
Our mission is to ensure property value and provide peace of mind when attached.
- Vision: To become the national gold brand by 2025
- Strategy: Applying 4.0 technology in business development of gold, silver and gemstone industry in Vietnam, make gold more versatile
- Core values: Safety - Convenience - Fast</p>
              <DownloadSection>
                <h4>App is coming soon</h4>
                <DownloadButton>
                <div className="item"><img src="./images/appstore.png" alt="App Store Download" /></div>
                <div className="item"><img src="./images/CHPlay.png" alt="CH Play Download" /></div>
                </DownloadButton>
              </DownloadSection>
            </RightBox>
          </Wrapper>
        {/* <PageHeader
            title="KSHARK"
            subTitle="AMM and yield farm on Binance Smart Chain."
        />
        <Stats/>
        <Earn/>
        <Finance/> */}
        {/* <ProductsServices/> */}
        {/* <Community/> */}
        </Container>
      </Page>
  );
};

export default Home;