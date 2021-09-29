import Flex from 'components/Box/Flex';
import Page from 'components/Layout/Page';
import styled from 'styled-components';
import { styled as MuiStyled } from '@mui/material/styles';
import {Box , LinearProgress , Button} from '@mui/material'
import {FacebookIcon , TumblerIcon , TwitterIcon , HomeIcon} from './components/icons/index'
import Info from './components/cards/Info';
import Description from './components/cards/Description';
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

const LaunchpadDetails = () => {
    const {isXl} = useMatchBreakpoints();
    const isMobile = isXl === false;

  return (
      <Page>
        <Box width="100%" display="flex" justifyContent="center" padding="10px">
        <Container>
          <DetailContainer>
            <ImageSection>
                <img src="/images/projectShowRoom/hotungmau-detail.png" alt="Feature Image" height="100%" /> 
            </ImageSection>
            <MetaSection>
                <Title>Show Room Hồ Tùng Mậu</Title>
                <Section>
                    <Box display="flex" mr="30px">
                        <Box mr="5px"> <FacebookIcon/> </Box>
                        <Box mr="5px"> <TumblerIcon/> </Box>
                        <Box mr="5px"> <TwitterIcon/> </Box>
                        <Box mr="5px"> <HomeIcon/> </Box>
                    </Box>
                    <Box p="10px" backgroundColor="rgba(255,255,255, .3)" borderRadius="20px" fontSize="14px">OPENING/ UPCOMING/ CLOSED</Box>
                </Section>
                <Section>
                    <Box display="flex" mr="30px" alignItems="center">
                        <Box mr="5px" fontSize="14px"> Raised: </Box>
                        <Box mr="5px" fontSize={isMobile ? "14px" : "24px"} fontFamily="SFProTextBold"> 2.000.000.000 </Box>
                        <Box color="rgba(255,255,255, .5)" fontSize="14px"> VNDC </Box>
                    </Box>
                    <Box p="10px" backgroundColor="rgba(255,255,255, .3)" borderRadius="20px" fontSize="14px">SUCCESS/ FAIL</Box>
                </Section>
                <Box mb="10px">Interest: 20%</Box>
                <Box display="flex">
                    <Box mr="5px">Progress: </Box>
                    <Box fontSize="16px" fontFamily="SFProTextBold">50% </Box>
                </Box>
                <Box sx={{ width: '100%', marginTop:'20px', marginBottom: '10px' }}>
                        <LinearProgress 
                        sx={{
                            height: "12.67px",
                            backgroundColor: "#16171B",
                            [`& .MuiLinearProgress-bar`] : {
                                backgroundColor: '#FFC247'
                            }
                        }} 
                        variant="determinate" value={50}
                        />
                </Box>
                <Box mb="10px">Investors: 5,000</Box>
                <Box mb="10px" color="rgba(255,255,255, .5)">Close time: 2021-12-12 22:00:00 UTC +7. </Box>
                <Box p="10px" width="100%" backgroundColor="rgba(255,255,255, .3)" textAlign="center" borderRadius="20px" mb="10px">10 days 2 hours 30 minutes 10 seconds left</Box>
                <ButtonSection>
                    <StyledButton variant="contained">Approve Token</StyledButton>
                    <OutLinedStyledButton variant="contained">Join Pool</OutLinedStyledButton>
                </ButtonSection>
            </MetaSection>
          </DetailContainer>
          <Info isMobile={isMobile}/>
          <Description/>
        </Container>
        </Box>
      </Page>
  );
};


export default LaunchpadDetails;