import Flex from 'components/Box/Flex';
import Page from 'components/Layout/Page';
import styled from 'styled-components';
import Filter from './components/filter/Filter';
import FlexLayout from './components/layout/FlexLayout'
import { Box } from '@mui/material'
import ProjectCard from './components/cards/ProjectCard'
import MenuLink from "components/Menu/MenuLink";



const Launchpad = () => {

  return (
      <Page>
        <Container>
          <Title>
            <h2>Launchpad</h2>
          </Title>
          <Filter/>
          <FlexLayout>
            <MenuLink href="/launchpad-details">
              <ProjectCard />
            </MenuLink>
            <MenuLink href="/launchpad-details">
              <ProjectCard />
            </MenuLink>
            <MenuLink href="/launchpad-details">
              <ProjectCard />
            </MenuLink>
            <MenuLink href="/launchpad-details">
              <ProjectCard />
            </MenuLink>
          </FlexLayout>
        </Container>
      </Page>
  );
};

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
  margin-top: 100px;
  align-items: center;
  width: 100%;
`

export default Launchpad;