import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import InfoMobile from './InfoMobile'

const Info = ({isMobile}) => {

    return (
        <>
        {
            isMobile ? <InfoMobile/> :
            <Wrapper>
                <Row>
                    <Col>
                        <ItemRow>
                        <Title>
                            IDO Information
                        </Title>
                        </ItemRow>
                        <ItemRow>
                        <Paragraph>
                            Token release
                        </Paragraph>
                        <Paragraph>
                            1,000,000,000 TOKEN
                        </Paragraph>
                        </ItemRow>
                        <ItemRow>
                        <Paragraph>
                            Swap Rate
                        </Paragraph>
                        <Paragraph>
                            1 VNDC = 10 TOKEN
                        </Paragraph>
                        </ItemRow>
                        <ItemRow>
                        <Paragraph>
                            Min - Max Cap
                        </Paragraph>
                        <Paragraph>
                            50,000 - 70,000 VNDC
                        </Paragraph>
                        </ItemRow>
                        <ItemRow>
                        <Paragraph>
                            Release Date
                        </Paragraph>
                        <Paragraph>
                            Release Date
                        </Paragraph>
                        </ItemRow>
                    </Col>
                    <Col>
                        <ItemRow>
                            <Title>
                                Tier Rank
                            </Title>
                        </ItemRow>
                        <ItemRow>
                            <Paragraph>
                                VIP 7
                            </Paragraph>
                            <Paragraph>
                                1%
                            </Paragraph>
                        </ItemRow>
                        <ItemRow>
                            <Paragraph>
                                VIP 8
                            </Paragraph>
                            <Paragraph>
                                2%
                            </Paragraph>
                        </ItemRow>
                        <ItemRow>
                            <Paragraph>
                                VIP 9
                            </Paragraph>
                            <Paragraph>
                                3%
                            </Paragraph>
                        </ItemRow>
                        <ItemRow>
                            <Paragraph>
                                VIP 10
                            </Paragraph>
                            <Paragraph>
                                4%
                            </Paragraph>
                        </ItemRow>
                    </Col>
                </Row>
            </Wrapper>
            }
        </>
    )
}

const Wrapper = styled(Box)`
    width: 100%;
    padding: 16px 32px;
    background-color: rgba(255,255,255, .1);
    border-radius: 8px;
`
const Row = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
const Col = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 48%;
`
const ItemRow = styled(Box)`
    padding: 10px;
    border-bottom: 1px solid #848484;
    display: flex;
    justify-content: space-between;
    ${`@media only screen and (max-width: 600px)`} {
        flex-direction: column;
        width: 100%;
        justify-content: center;
    }
`
const Title = styled(Box)`
    font-family: SFProTextBold;
    font-size: 16px;
    ${`@media only screen and (max-width: 600px)`} {
        font-size: 14px;
    }
`
const Paragraph = styled(Box)`
    font-size: 14px;
    ${`@media only screen and (max-width: 600px)`} {
        font-size: 12px;
    }
`
export default Info
