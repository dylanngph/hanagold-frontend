import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #ffc247;
    --color-blue-1: #ffffff1c;
    --color-blue-2: #16171B;
    --color-blue-3: #3A7788;
    --color-white-1: #b8cce0;
    --height: 100vh;
  }
  * {
    font-family: SFProTextLight, sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};
    
    img {
      height: auto;
      max-width: 100%;
    }
    h2 {
      font-family: SFProTextBold;
    }
  }
  .title {
    background: -webkit-linear-gradient(158.68deg, #FFCC70 11.8%, #FBFB9C 53.46%, #FFC183 94.68%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default GlobalStyle
