import React from 'react'
import styled from 'styled-components';
import { styled as muiStyled } from '@mui/material/styles';
import {Box , Button , LinearProgress} from '@mui/material'
import {FacebookIcon , TumblerIcon , TwitterIcon , HomeIcon, StarIcon} from '../icons/index'

const PCard = styled.div`
  align-self: baseline;
  background: rgba(255, 255, 255, .1);
  border-radius: 8px;
  display: flex;
  position: relative;
  flex-direction: column;
  @media screen and (max-width: 600px){
    width: 100%;
    }
`;
const Container = styled(Box)`
    padding: 20px 30px 20px 30px;
    width: 100%;
    display: flex;
    flex-direction: column;
`
const Detail = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 600px){
        flex-direction: column;
        align-items: flex-start;
        img {
            margin-bottom: 10px
        }
        }
`
const BoxDetail = styled(Box)`
    display: flex;
    margin-bottom: 10px;
    align-items: center;
    h4 {
        font-size: 28px;
        font-family: SFProTextBold;
        color: #FFC247
    }
    @media screen and (max-width: 600px){
        h4 {
            font-size: 24px
        }
        }
`
const ProgressSection = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 20px 30px 20px 30px;
    background-color: rgba(255,255,255,.1);
    border-radius: 8px;
`

const ProjectCard = () => {
    return (
        <PCard>
            <Container>
                <Detail>
                    <Box mr="20px" width="100%">
                        <img src="/images/projectShowRoom/hotungmau.png" width="100%"/> 
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <BoxDetail>
                            <h4>Show Room Hồ Tùng Mậu</h4>
                        </BoxDetail>
                        <BoxDetail>
                            <Box mr="4px"><FacebookIcon/></Box>
                            <Box mr="4px"><TumblerIcon/></Box>
                            <Box mr="4px"><TwitterIcon/></Box>
                            <Box mr="4px"><HomeIcon/></Box>                         
                        </BoxDetail>
                        <BoxDetail>
                            <Box mr="10px" fontSize="14px">4/5</Box>
                            <StarIcon />
                        </BoxDetail>
                        <BoxDetail>
                            <Box mr="10px">Raise:</Box>
                            <Box mr="10px" fontSize="24px" fontFamily="SFProTextBold">2.000.000.000</Box>
                            <Box color="rgba(255,255,255,.5)" >VNDC</Box>
                        </BoxDetail>
                        <BoxDetail>
                            Interest: 20%
                        </BoxDetail>
                        <ViewDetailButton variant="contained">
                            View Detail
                        </ViewDetailButton>
                    </Box>
                </Detail>
            </Container>
            <ProgressSection>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Box>
                            Progress
                        </Box>
                        <Box display="flex">
                            <Box color="rgba(255,255,255,.7)" mr="3px">Investor:</Box>
                            <Box>5,000</Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', marginTop:'10px', marginBottom: '10px' }}>
                        <LinearProgress 
                        sx={{
                            height: "5px",
                            backgroundColor: "#16171B",
                            [`& .MuiLinearProgress-bar`] : {
                                backgroundColor: '#FFC247'
                            }
                        }} 
                        variant="determinate" value={50}
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="100%">
                        <Box>
                            50.00%
                        </Box>
                        <Box display="flex">
                            <Box mr="3px">10000/20000</Box>
                            <Box color="rgba(255,255,255,.7)">VNDC</Box>
                        </Box>
                    </Box>
            </ProgressSection>
        </PCard>
    )
}

const ViewDetailButton = muiStyled(Button)({
    boxShadow: 'none',
    fontSize: 16,
    padding: '3px 12px',
    color: '#000',
    borderRadius: '20px',
    backgroundColor: '#FFC247',
    '&:hover': {
        backgroundColor: '#FFC247',
        opacity: .8,
        boxShadow: 'none',
    }
  });

export default ProjectCard
