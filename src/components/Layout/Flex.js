import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    min-width: 300px;
    max-width: 31.5%;
    width: 100%;
    margin: 0 8px;
    margin-bottom: 16px;
  }
  ${`@media (max-width: 800px)`} {
    margin: none;
    justify-content: center;
  }
`

export default FlexLayout
