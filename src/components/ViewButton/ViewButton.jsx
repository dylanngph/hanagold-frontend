import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Flex from 'components/Box/Flex';
import styled from 'styled-components'
import {Box} from '@mui/material'
import { useState } from 'react';

const ViewListContainer = styled(Flex)`
    margin-right: 30px
`

const ViewButton = () => {

    return (
        <ViewListContainer>
            <Box mr="20px">
                <ViewListIcon 
                    
                />
            </Box>
            <Box>
                <ViewModuleIcon
                    
                    sx = {{opacity: '30%'}}
                />
            </Box>
        </ViewListContainer>
    )
}

export default ViewButton
