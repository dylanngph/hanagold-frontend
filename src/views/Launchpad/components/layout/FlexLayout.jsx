import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    max-width: 100%;
    margin-bottom: 16px;
    margin: 10px;
    ${`@media (max-width: 800px)`} {
      margin: none;
      width: 100%;
    }
  }
  
`

export default FlexLayout