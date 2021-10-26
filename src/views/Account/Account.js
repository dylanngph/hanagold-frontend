import React, {useState, useEffect} from 'react'
import {Box,TextField,MenuItem} from '@mui/material'
import styled from '@emotion/styled'
import { styled as muiStyled} from '@mui/material/styles'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {ReactComponent as HNGIcon} from '../../hng-account.svg'
import useKardiachain from 'hooks/useKardiachain'
import bouties from 'constants/bounties'
import Card from '../Bounty/components/Card'
import { fetchUserBounty } from '../Bounty/hooks/fetchUserBounty'



const Account = () => {
    const [type, setType] = React.useState('ALL')
    const {account} = useKardiachain()
    const [bountyList, setBountyList] = useState(bouties)

    useEffect(async() => {
		if (account) {
			const bounties = await fetchUserBounty(account)
			setBountyList(bounties)
		}
	}, [account])


    const shortenAccount = () => {
        if(account === undefined) return ''
        if (account.length > 20) {
            return account.substring(0, 20) + '...';
         }
        return {account};
    }

    return (
        <Wrapper>
            <Box fontSize="30px" fontFamily="SFProTextBold" mb="20px">
                My Account
            </Box>
           <AccountBox>
               <Flex>
                    <Box fontSize="16px" textAlign="left" maxWidth="95%">
                        {shortenAccount()}
                    </Box>
                    <Box><ContentCopyIcon maxWidth="5%" sx={{color:'#A0A0A0'}}/></Box>
               </Flex>
               <Flex
                    sx={{
                        gap: '10px',
                        '@media only screen and (max-width: 600px)' : {
                            flexDirection: 'column',
                            alignItems: 'start',
                            gap: '10px'
                        }
                    }}
               >
                    <Box sx={{
                        border: '1px solid #9D9D9D',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        minWidth: '338px',
                        height: '50px',
                        '@media only screen and (max-width: 600px)' : {
                            minWidth: '100%'
                        }
                    }}>
                        <Box p="10px" borderRight="1px solid #9D9D9D ">
                            <HNGIcon/>
                        </Box>
                        <Box p="10px">
                            15.00
                        </Box>
                    </Box>
                    <Box sx={{
                        border: '1px solid #9D9D9D',
                        borderRadius: '5px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '10px',
                        height: '50px',
                        gap: '10px',
                        width: '100%'
                    }}>
                        NFTs: <span style={{color: '#FFC247'}}> 0</span>
                    </Box>
               </Flex>
           </AccountBox>
           <CustomTextField
                select
                value={type}
                onChange={(e) => setType(e.target.value) }
                >
                {typeData.map((option) => (
                    <MenuItem
                     key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </CustomTextField>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
			{
				bountyList.map((d, i) => <Card data={d} key={i} />)
			}
			</div>
        </Wrapper>
    )
}
const Wrapper = styled(Box)`
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    color: #F2F2F2;
    padding: 100px 30px;
`
const AccountBox = styled(Box)`
    padding: 18px;
    background: #2D2E31;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    max-width: 469px;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;
`
const Flex = styled(Box)`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`
const typeData = [
    {
      value: 'ALL',
      label: 'All NFT',
    },
    {
      value: 'BOUNTY',
      label: 'Bounty NFT',
    },
    {
      value: 'GOLD',
      label: 'Gold NFT',
    },
  ];
const CustomTextField = muiStyled(TextField)({

'& .MuiOutlinedInput-root': {
    backgroundColor: '#2D2E31',
    color: '#fff',
    '& svg': {
        color: '#fff'
    },
    '& fieldset' : {

    },
    '&:hover fieldset': {
    borderColor: '#2D2E31',
    },
    '&.Mui-focused fieldset': {
    borderColor: '#2D2E31',
    },
},

});



export default Account
