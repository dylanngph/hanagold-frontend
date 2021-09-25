import React from 'react'
import {Box} from '@mui/material'
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Filter = () => {
    const [raise, setRaise] = React.useState('');
    const [investor, setInvestor] = React.useState('');
    const [releaseDate, setReleaseDate] = React.useState('');
    const [boaResult, setBoaResult] = React.useState('');

    const handleChangeRaise = (event) => {
        setRaise(event.target.value);
    };
    const handleChangeInvestor = (event) => {
        setInvestor(event.target.value);
    };
    const handleChangeReleaseDate = (event) => {
        setReleaseDate(event.target.value);
    };
    const handleChangeBoaResult = (event) => {
        setBoaResult(event.target.value);
    };

    return (
        <Wrapper display="flex" mb="10px">
            <Wrapper1 display="flex">
            <Section>
                <Box>Total: 4/4 projects</Box>
            </Section>
            <Section>
                <div>Sort by</div>
                <Box sx={{ 
                    minWidth: 120, 
                    marginLeft: '10px'
                 }}>
                    <FormControl fullWidth >
                        <Select
                        sx = {{ backgroundColor: 'rgba(255,255,255, .4)' , svg :{color: '#fff'} }}
                        value={raise}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={handleChangeRaise}
                        >
                        <MenuItem disabled value="">
                            <Box color="#fff">Raise</Box>
                        </MenuItem>    
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ 
                    minWidth: 120, 
                    marginLeft: '10px'
                 }}>
                    <FormControl fullWidth >
                        <Select
                        sx = {{ backgroundColor: 'rgba(255,255,255, .4)' , svg :{color: '#fff'} }}
                        value={investor}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={handleChangeInvestor}
                        >
                        <MenuItem disabled value="">
                            <Box color="#fff">Investor</Box>
                        </MenuItem>    
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ 
                    minWidth: 120, 
                    marginLeft: '10px'
                 }}>
                    <FormControl fullWidth >
                        <Select
                        sx = {{ backgroundColor: 'rgba(255,255,255, .1)' , svg :{color: '#fff'} }}
                        value={releaseDate}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={handleChangeReleaseDate}
                        >
                        <MenuItem disabled value="">
                            <Box color="#fff">Release Date</Box>
                        </MenuItem>    
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ 
                    minWidth: 120, 
                    marginLeft: '10px',
                 }}>
                    <FormControl fullWidth >
                        <Select
                        sx = {{ backgroundColor: 'rgba(255,255,255, .4)' , svg :{color: '#fff'} }}
                        value={boaResult}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        onChange={handleChangeBoaResult}
                        >
                        <MenuItem disabled value="">
                            <Box color="#fff">BOA Result</Box>
                        </MenuItem>    
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Section>
            </Wrapper1>
            <SearchSection>
                <Box mb="5px">Search</Box>
                <input type="text" placeholder="Search Farm" />
            </SearchSection>
        </Wrapper>
    )
}
const Wrapper = styled(Box)`
    align-items: flex-end;
    ${`@media only screen and (max-width: 748px)`} {
        flex-direction: column;
        align-items: center;
    }
`
const Wrapper1 = styled(Box)`
    align-items: center;
    ${`@media only screen and (max-width: 748px)`} {
        flex-direction: column;
    }
`
const Section = styled(Box)`
    margin-right: 50px;
    display: flex;
    align-items: center;
    ${`@media only screen and (max-width: 748px)`} {
        flex-direction: column;
        margin-right: 0;
        margin-bottom: 10px;
    }
`
const SearchSection = styled(Box)`
    display: flex;
    flex-direction: column;
    input {
        padding: 16.5px 14px;
        border-radius: 4px;
        background-color: rgba(255,255,255, .4);
        height: 56px;
    }
`
export default Filter
