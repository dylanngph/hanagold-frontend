import Flex from 'components/Box/Flex';
import Page from 'components/Layout/Page';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { styled as MuiStyled } from '@mui/material/styles';
import {Box , LinearProgress , Button} from '@mui/material'
import {FacebookIcon , TumblerIcon , TwitterIcon , HomeIcon, StarIcon} from './components/icons/index'
import Info from './components/cards/Info';
import Description from './components/cards/Description';



const LaunchpadDetails = () => {
    const {details} = useParams()

  
  return (
      <Page>
        <Box width="100%" display="flex" justifyContent="center" padding="10px">
        <Container>
          <DetailContainer>
            <ImageSection>
                <img src="/images/projectShowRoom/hotungmau-detail.png" alt="Feature Image" width="100%" /> 
            </ImageSection>
            <MetaSection>
                <Box color="#FFC247" fontSize="24px" fontFamily="SFProTextBold" mb="10px" >Show Room Hồ Tùng Mậu</Box>
                <Section>
                    <Box display="flex" mr="30px">
                        <Box mr="5px"> <FacebookIcon/> </Box>
                        <Box mr="5px"> <TumblerIcon/> </Box>
                        <Box mr="5px"> <TwitterIcon/> </Box>
                        <Box mr="5px"> <HomeIcon/> </Box>
                    </Box>
                    <Box p="10px 40px 10px 40px" backgroundColor="rgba(255,255,255, .3)" borderRadius="20px" fontSize="14px">OPENING/ UPCOMING/ CLOSED</Box>
                </Section>
                <Section>
                    <Box display="flex" mr="30px" alignItems="center">
                        <Box mr="5px" fontSize="14px"> Raised: </Box>
                        <Box mr="5px" fontSize="24px" fontFamily="SFProTextBold"> 2.000.000.000 </Box>
                        <Box color="rgba(255,255,255, .5)" fontSize="14px"> VNDC </Box>
                    </Box>
                    <Box p="10px 40px 10px 40px" backgroundColor="rgba(255,255,255, .3)" borderRadius="20px" fontSize="14px">SUCCESS/ FAIL</Box>
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
                <Box p="10px 0 10px 0" width="100%" backgroundColor="rgba(255,255,255, .3)" textAlign="center" borderRadius="20px" mb="10px">10 days 2 hours 30 minutes 10 seconds left</Box>
                <Box width="100%" display="flex" justifyContent="space-between">
                    <StyledButton variant="contained">Approve Token</StyledButton>
                    <OutLinedStyledButton variant="contained">Join Pool</OutLinedStyledButton>
                </Box>
            </MetaSection>
          </DetailContainer>
          <Info/>
          <Description/>
        </Container>
        </Box>
      </Page>
  );
};

const Container = styled(Flex)`
  flex-direction: column;
  margin-top: 100px;
  padding: 24px;
  background-color: rgba(255,255,255, .1);
  border-radius: 8px;
  width: 1132px;
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
    width: 50%;
    margin-right: 20px;
    ${`@media only screen and (max-width: 600px)`} {
        width: 100%;
        margin-right: 0;
    }
`
const MetaSection = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 50%;
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
    }
  });

export default LaunchpadDetails;