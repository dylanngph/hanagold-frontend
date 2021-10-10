import React from 'react'
import styled from 'styled-components'
import Page from 'components/Layout/Page';
import Flex from 'components/Box/Flex';
import Filter from './filter/Filter'
import useMatchBreakpoints from 'hooks/useMatchBreakpoints';
import MenuLink from "components/Menu/MenuLink";
import Card from './cards/Card'


const Marketplace = () => {
    const {isXl} = useMatchBreakpoints();
    const isMobile = isXl === false;

    return (
        <Page>
            <Container>
                <Title>
                    <h2>NFT Market Place</h2>
                </Title>
                <Filter isMobile={isMobile} />
                <GridLayout>
                    <MenuLink href="/marketplace-details">
                        <Card/>
                    </MenuLink>
                    <MenuLink href="/marketplace-details">
                        <Card/>
                    </MenuLink>
                    <MenuLink href="/marketplace-details">
                        <Card/>
                    </MenuLink>
                    <MenuLink href="/marketplace-details">
                        <Card/>
                    </MenuLink>
                </GridLayout>
            </Container>
        </Page>
    )
}

const Title = styled.div`
  text-align: center;
  margin-bottom: 20px;
  h2 {
    font-size: 48px;
    text-transform: uppercase;
  }
  h4 {
    font-family: SFProTextBold;
    color: rgba(255,255,255,.3);
    font-size: 24px;
  }
`
const Container = styled(Flex)`
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 80px;
`
const GridLayout = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  justify-content: center;

  @media (min-width: 300px) {
    grid-template-columns: auto;
  }
  @media (min-width: 600px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 900px) {
    grid-template-columns: auto auto auto;
  }
  @media (min-width: 1200px) {
    grid-template-columns: auto auto auto auto
  }
`
export default Marketplace
