import styled from 'styled-components'
import {Box} from '@mui/material'

const ContactContainer = styled(Box)`
    position: absolute;
    right: 100px;
    top: 40px;
    button {
        padding: 15px 32px;
        background-color: rgba(255, 194, 71, 1);
        border-radius: 4px;
        color: #000;
        font-family: SFProTextBold;
        width: 150px
    }
    button:hover {
        background-color: rgba(255, 194, 71, .9)
      }

`

const Contact = () => {
    return (
        <ContactContainer>
            <button>
            Contact
            </button>
        </ContactContainer>
    )
}

export default Contact
