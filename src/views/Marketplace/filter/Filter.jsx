import React from 'react'
import {Box} from '@mui/material'
import styled from 'styled-components'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FilterSection from './FilterSection';
import FilterSectionMobile from './FilterSectionMobile';

const Filter = ({isMobile}) => {
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
            {!isMobile ?
                <FilterSection 
                    handleChangeRaise={handleChangeRaise}
                    handleChangeInvestor = {handleChangeInvestor}
                    handleChangeReleaseDate = {handleChangeReleaseDate}
                    handleChangeBoaResult = {handleChangeBoaResult}
                    raise = {raise}
                    investor = {investor}
                    releaseDate = {releaseDate}
                    boaResult = {boaResult}
                />
            :
            <FilterSectionMobile 
                handleChangeRaise={handleChangeRaise}
                handleChangeInvestor = {handleChangeInvestor}
                handleChangeReleaseDate = {handleChangeReleaseDate}
                handleChangeBoaResult = {handleChangeBoaResult}
                raise = {raise}
                investor = {investor}
                releaseDate = {releaseDate}
                boaResult = {boaResult}
            />
            }
        </Wrapper>
    )
}
const Wrapper = styled(Box)`
    align-items: center;
    width: 100%;
    justify-content: center;
`
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
const Mobile = styled(Box)`

`
export default Filter
