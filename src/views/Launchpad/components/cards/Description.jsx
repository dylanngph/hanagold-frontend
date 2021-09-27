import React from 'react'
import styled from 'styled-components'
import {Box} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';


const RateSection = () => {

    return (
        <Box display="flex" alignItems="center" mb="10px">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarBorderIcon/>
            <Box ml="5px">
                4/5
            </Box>
        </Box>
    )
}

const Description = () => {
    return (
        <Wrapper>
            <Left>
                <Title>
                    PROJECT SAMPLE NAME
                </Title>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a dolor ex. Duis ullamcorper dui ac orci viverra, et fermentum ipsum iaculis. Integer tempus mollis diam at placerat. Maecenas elementum metus enim, quis lacinia velit facilisis eu. Aliquam convallis luctus sapien, malesuada congue magna blandit at. Proin non mauris id velit cursus faucibus. Donec eget volutpat nunc. Nullam vitae viverra enim. Vivamus id tempor ligula, sollicitudin ullamcorper lacus.
</p>
            </Left>
            <Right>
                <BOA>
                    <Box fontSize="24px" sx={{textTransform: 'uppercase'}} mb="10px">
                        BOA Results
                    </Box>
                    <Box>
                    <RateSection/>
                    </Box>
                    <p>
                        Vestibulum at pharetra ante. Vivamus euismod magna ut nibh maximus gravida.
                    </p>
                </BOA>
            </Right>
        </Wrapper>
    )
}
const Wrapper = styled(Box)`
    width: 100%;
    padding: 16px 32px;
    display: flex;
    ${`@media only screen and (max-width: 600px)`} {
        flex-direction: column;
    }
`
const Title = styled(Box)`
    font-size: 24px;
    font-family: SFProTextBold;
    margin-bottom: 10px;
`
const Left = styled(Box)`
    width: 65%;
    p {
        line-height: 24px;
        text-align: justify;
    }
    ${`@media only screen and (max-width: 600px)`} {
        width: 100%;
    }
`
const Right = styled(Box)`
    width: 35%;
    margin-left: 30px;
    p {
        line-height: 24px;
    }
    ${`@media only screen and (max-width: 600px)`} {
        width: 100%;
        margin-top: 10px;
        margin-left: 0;
    }
`
const BOA = styled(Box)`
    padding: 20px;
    background-color: rgba(255,255,255, .1);
    border-radius: 8px;
`
export default Description
