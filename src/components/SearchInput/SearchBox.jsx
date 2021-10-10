import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {Box} from '@mui/material'


const SearchBox = () => {

    return (
        <Box display="flex" flexDirection="column">
            {/* <Box sx={{
                '@media only screen and (max-width: 600px)': {
                    display: 'none'
                }
            }} 
            >
                SEARCH
            </Box> */}
            <Autocomplete
                sx= {{
                    background: "rgba(255,255,255, .2)",
                    borderRadius: '4px',
                    width: '500px',
                    '& input' : {
                        color: '#fff'
                    },
                    '@media only screen and (max-width: 600px)' : {
                        width: '300px',
                    }
                }}
                id="free-solo-demo"
                freeSolo
                options={top100Films.map((option) => option.title)}
                renderInput={(params) => <TextField {...params} placeholder="Search Farm" />}
            />
        </Box>
    )
}
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
]
export default SearchBox
