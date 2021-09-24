import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box} from '@mui/material'

const options = ['Hot', 'Trending'];

const FilterBox = () => {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    return (
        <Box display="flex" flexDirection="column">
            <Box sx={{
                '@media only screen and (max-width: 600px)': {
                    display: 'none'
                }
            }} 
            >
                SORT BY
            </Box>
            <Autocomplete
                sx= {{
                    background: "rgba(255,255,255, .2)",
                    borderRadius: '4px',
                    width: '170px',
                    marginTop: '10px',
                    marginRight: '15px',
                    '& input' : {
                        color: '#fff'
                    },
                    '@media only screen and (max-width: 600px)' : {
                        width: '300px',
                        marginRight: 0
                    },
                }}
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                renderInput={(params) => <TextField {...params} />}
            />
        </Box>
    )
}

export default FilterBox
