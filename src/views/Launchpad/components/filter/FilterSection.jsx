import React from 'react'
import {Box} from '@mui/material'
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterSection = ({handleChangeRaise , handleChangeInvestor , handleChangeReleaseDate , handleChangeBoaResult , raise , investor , releaseDate , boaResult}) => {

    return (
            <Wrapper1>
                <Wrapper2>
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
                </Wrapper2>
                <SearchSection>
                    <Box mb="5px">Search</Box>
                    <input type="text" placeholder="Search Farm" />
                </SearchSection>
            </Wrapper1>
    )
}

const Wrapper1 = styled(Box)`
    display: flex;
    align-items: flex-end;
`
const Wrapper2 = styled(Box)`
    display: flex;
    align-items: center;
`
const Section = styled(Box)`
    margin-right: 50px;
    display: flex;
    align-items: center;
`
const SearchSection = styled(Box)`
    display: flex;
    flex-direction: column;
    input {
        padding: 16.5px 14px;
        border-radius: 4px;
        background-color: rgba(255,255,255, .4);
        height: 56px;
    };

`
export default FilterSection
