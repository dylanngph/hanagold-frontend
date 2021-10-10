import { Box } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const InfoMobile = () => {
    return (
        <Container>
            <Section>
                <Row>
                    <Title>
                        IDO Information
                    </Title>
                </Row>
                <Row>
                    <Paragraph>
                        Token Release
                    </Paragraph>
                    <Paragraph>
                        1,000,000,000 TOKEN
                    </Paragraph>
                </Row>
                <Row>
                    <Paragraph>
                        Swap Rate
                    </Paragraph>
                    <Paragraph>
                        1 VNDC = 10 TOKEN
                    </Paragraph>
                </Row>
                <Row>
                    <Paragraph>
                        Min - Max Cap
                    </Paragraph>
                    <Paragraph>
                        50,000 - 70,000 VNDC
                    </Paragraph>
                </Row>
                <Row>
                    <Paragraph>
                        Release Date
                    </Paragraph>
                    <Paragraph>
                        2021-10-12 22:00:00 UTC +7
                    </Paragraph>
                </Row>
            </Section>
            
            <Section>
                <Row>
                    <Title>
                        Tier Rank
                    </Title>
                </Row>
                <Row>
                    <Paragraph>
                        VIP 7
                    </Paragraph>
                    <Paragraph>
                        1%
                    </Paragraph>
                </Row>
                <Row>
                    <Paragraph>
                        VIP 8
                    </Paragraph>
                    <Paragraph>
                        2%
                    </Paragraph>
                </Row>
                <Row>
                    <Paragraph>
                        VIP 9
                    </Paragraph>
                    <Paragraph>
                        3%
                    </Paragraph>
                </Row>
                <Row>
                    <Paragraph>
                        VIP 10
                    </Paragraph>
                    <Paragraph>
                        4%
                    </Paragraph>
                </Row>
            </Section>
        </Container>
    )
}

const Container = styled(Box)`

`
const Section = styled(Box)`
    margin-bottom: 20px;
`
const Row = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    height: 50px;
    align-items: center;
    border-bottom: 1px solid #fff;
`
const Title = styled(Box)`
    font-size: 18px;
    font-family: SFProTextBold;
`
const Paragraph = styled(Box)`
    font-size: 12px;
    font-family: SFProText;
    margin-right: 5px;
`
export default InfoMobile
