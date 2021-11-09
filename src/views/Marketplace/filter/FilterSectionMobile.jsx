import React from 'react'
import {Box} from '@mui/material'
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FilterSectionMobile = ({handleChangeRaise , handleChangeInvestor , handleChangeReleaseDate , handleChangeBoaResult , raise , investor , releaseDate , boaResult}) => {

    return (
            <Wrapper1>
                <Wrapper2>
                    <Section>
                        <Box textAlign="center" width="20%">Sort by</Box>
                        <Box sx={{ 
                            width: '40%',
                            marginRight: '10px'
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
                            width: '40%'
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
                    </Section>
                    <Section>
                        <Box sx={{ 
                            width: '50%', 
                            marginRight: '10px'
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
                             width: '50%',
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
    background-color: #2D2E31;
    flex-direction: column;
    padding: 10px;
    width: 100%;
    border-radius: 8px
`
const Wrapper2 = styled(Box)`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Section = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
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
export default FilterSectionMobile
