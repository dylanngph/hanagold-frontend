import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import Community from 'views/Home/components/Community/Community';
import Earn from 'views/Home/components/Earn/Earn';
import Finance from 'views/Home/components/Finance/Finance';
import ProductsServices from 'views/Home/components/ProductsServices/ProductsServices';
import Stats from 'views/Home/components/Stats/Stats';

const Home = () => {
  return (
      <Page>
        <PageHeader
            title="KSHARK"
            subTitle="AMM and yield farm on Binance Smart Chain."
        />
        <Stats/>
        <Earn/>
        <Finance/>
        {/* <ProductsServices/> */}
        {/* <Community/> */}
      </Page>
  );
};

export default Home;