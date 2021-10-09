import React from 'react'
import {Box} from '@mui/material'
import Button from 'components/Button/Button'
import styled from 'styled-components'

const Card = () => {
    return (
        <Container>
            <Box>
                <img src="/images/marketplace-sample-img.png" width="240px" />
            </Box>
            <Title>
            18K Gold Necklace
            </Title>
            <Box display="flex" alignItems="end" gap="5px">
                <Box>
                    Price: 
                </Box>
                <Box sx={{
                    fontSize: '20px',
                    fontFamily: 'SFProTextBold',
                }}>
                    5.600.000
                </Box>
                <Box sx={{
                    color: 'rgba(255,255,255, .5)'
                }}>
                    VNDC
                </Box>
            </Box>
            <BuyButton variant="contained">
                Buy
            </BuyButton>
        </Container>
    )
}
const Container = styled(Box)`
    background: rgba(255,255,255, .1);
    border-radius: 8px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
`
const Title = styled(Box)`
    font-size: 20px;
    font-family: SFProTextBold;
    color: #FFC247
`
const BuyButton = styled(Button)`
    width: 100%;
    background-color: #FFC247;
    color: #000;
`
export default Card
