import Page from 'components/Layout/Page';
import About from 'views/DIPO/components/About/AboutContent';
import DIPOContent from 'views/DIPO/components/DIPOContent/DIPOContent';
import DIPODetails from 'views/DIPO/components/DIPOContent/DIPODetails';
import DIPOTabBtn from 'views/DIPO/components/DIPOTabBtn/Btn';
import PageHeader from 'components/PageHeader/PageHeader';

function DIPO() {
  return (
    <Page>
      <PageHeader
          styleTitle={{
            maxWidth: 800,
            margin: '0 auto'
          }}
          fontSizeTitle="30px"
          logo="images/DIPO_hng-logo.png"
          title="DIGITAL INITIAL PRIVATE OFFERING"
          subTitle="Valuable capital for productive projects"
      />
      <About></About>
      <DIPOTabBtn></DIPOTabBtn>
      <DIPOContent></DIPOContent>
      <DIPODetails></DIPODetails>
    </Page>
  );
}
export default DIPO;