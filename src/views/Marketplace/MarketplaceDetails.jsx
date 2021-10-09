import Flex from 'components/Box/Flex';
import Page from 'components/Layout/Page';
import styled from 'styled-components';
import { styled as MuiStyled } from '@mui/material/styles';
import {Box , LinearProgress , Button} from '@mui/material'
import Info from './components/Info';
import Description from './components/Description';
import useMatchBreakpoints from 'hooks/useMatchBreakpoints';

const Title = styled(Box)`
    color: #FFC247;
    font-size: 24px;
    font-family: SFProTextBold;
    margin-bottom: 10px;
`

const ButtonSection = styled(Box)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    width: 100%;
    ${`@media only screen and (max-width: 600px)`} {
        flex-direction: column;
    }
`
const Container = styled(Flex)`
  flex-direction: column;
  margin-top: 100px;
  padding: 20px;
  background-color: rgba(255,255,255, .1);
  border-radius: 8px;
  width: 100%;
`
const DetailContainer = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    ${`@media only screen and (max-width: 600px)`} {
        flex-direction: column;
    }
`
const ImageSection = styled(Box)`
    width: 35%;
    display: flex;
    margin-right: 10px;
    ${`@media only screen and (max-width: 600px)`} {
        width: 100%;
    }
`
const MetaSection = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 65%;
    ${`@media only screen and (max-width: 600px)`} {
        width: 100%;
        margin-top: 20px;
    }

`
const Section = styled(Box)`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    ${`@media only screen and (max-width: 600px)`} {
        width: 100%;
        flex-direction: column;
        align-items: start;
        & > div {
            margin-bottom: 10px;
        }
    }
`
const StyledButton = MuiStyled(Button)({
    boxShadow: 'none',
    fontSize: 16,
    padding: '10px',
    color: '#000',
    borderRadius: '4px',
    width: '48%',
    fontFamily: 'SFProTextBold',
    backgroundColor: '#FFC247',
    '&:hover': {
        backgroundColor: '#FFC247',
        opacity: .8,
        boxShadow: 'none',
    },
    '@media only screen and (max-width: 600px)' : {
        width: '100%',
        marginBottom: '10px'
    }
  });

const OutLinedStyledButton = MuiStyled(Button)({
    boxShadow: 'none',
    fontSize: 16,
    padding: '10px',
    width: '48%',
    color: '#FFC247',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    fontFamily: 'SFProTextBold',
    border: '1px solid #FFC247',
    '&:hover': {
        backgroundColor: '#FFC247',
        color: '#000',
        boxShadow: 'none',
    },
    '&:focus': {
        borderColor: 'none'
    },
    '@media only screen and (max-width: 600px)' : {
        width: '100%',
        marginBottom: '10px'
    }
  });

const MarketplaceDetails = () => {
    const {isXl} = useMatchBreakpoints();
    const isMobile = isXl === false;

  return (
      <Page>
        <Box width="100%" display="flex" justifyContent="center" padding="10px">
        <Container>
          <DetailContainer>
            <ImageSection>
                <img src="/images/marketplace-detail.png" alt="Feature Image" height="100%" /> 
            </ImageSection>
            <MetaSection>
                <Title>18K Gold Necklace</Title>
                <Section>
                    <Box display="flex" mr="30px" alignItems="center">
                        <Box mr="5px" fontSize="14px"> Price: </Box>
                        <Box mr="5px" fontSize={isMobile ? "14px" : "24px"} fontFamily="SFProTextBold"> 2.000.000.000 </Box>
                        <Box color="rgba(255,255,255, .5)" fontSize="14px"> VNDC </Box>
                    </Box>
                </Section>
                <ProductInfo>
                    <Col>
                        <Box>Product Infomation</Box>
                    </Col>
                    <Col>
                        <Box>Name</Box>
                        <Box>The Queen</Box>
                    </Col>
                    <Col>
                        <Box>Material</Box>
                        <Box>18K Gold</Box>
                    </Col>
                    <Col>
                        <Box>Origin</Box>
                        <Box>Hanagold</Box>
                    </Col>
                    <Col>
                        <Box>Quality Verification</Box>
                        <Box>SBJ</Box>
                    </Col>
                </ProductInfo>
                <ButtonSection>
                    <StyledButton variant="contained">Buy</StyledButton>
                </ButtonSection>
            </MetaSection>
          </DetailContainer>
          <Description/>
        </Container>
        </Box>
      </Page>
  );
};

const ProductInfo = styled(Box)`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: rgba(255,255,255, .1);
    padding: 20px 25px 20px 25px;
    margin-bottom: 25px;
`
const Col = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 15px 0;
    border-bottom: 0.5px solid #848484
`
export default MarketplaceDetails;