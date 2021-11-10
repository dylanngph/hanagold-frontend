import React, {useState, useEffect} from 'react'
import {Box,TextField,MenuItem} from '@mui/material'
import styled from '@emotion/styled'
import { styled as muiStyled} from '@mui/material/styles'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {ReactComponent as HNGIcon} from '../../hng-account.svg'
import useKardiachain from 'hooks/useKardiachain'
// import bouties from 'constants/bounties'
import accountData from 'constants/account'
import {VoucherCard , GoldCard} from './components/Card/Card'
import { fetchAccount } from './hooks/fetchAccount'
import Paginating from './components/Paginating'


const Account = () => {
    const [type, setType] = useState('ALL')
    const {account} = useKardiachain();
    const [accountList, setAccountList] = useState(accountData);
    const [listData, setListData] = useState([]);
    const {balanceOf, voucherBalance, goldBalance, allNft, dataVoucherArr, dataGoldArr } = accountList ?? {}
    
    useEffect(() => {
		if (account) {
            const getAccount = async() => {
                const data = await fetchAccount(account);
                setAccountList(data)
            }
			getAccount()
		}
	}, [account])

    const shortenAccount = () => {
        if(account === undefined) return ''
        if (account.length > 20) {
            return account.substring(0, 20) + '...' + account.substring(account.length - 4) ;
         }
        return {account};
    }

    useEffect(() => {
        let mapArr = []
        switch (type) {
            case 'ALL':
                accountList.voucherData.map((d, i) => {
                    dataVoucherArr && dataVoucherArr.length > 0 ? dataVoucherArr.map((item) => {
                        mapArr.push(<VoucherCard voucherBalance={voucherBalance} indexVoucher={item} data={d} key={i} />)
                    }) :  mapArr.push(<VoucherCard voucherBalance={voucherBalance} data={d} key={i} />)
                  
                })
                accountList.mintData.map((d, i) => {
                    dataGoldArr && dataGoldArr.length > 0 ? dataGoldArr.map((item) => {
                        mapArr.push(<GoldCard goldBalance={goldBalance} indexGold={item} data={d} key={i} />)
                    }) : mapArr.push(<GoldCard goldBalance={goldBalance} data={d} key={i} />)
                })
                break;
            case 'BOUNTY':
                accountList.voucherData.map((d, i) => {
                    dataVoucherArr && dataVoucherArr.length > 0 ? dataVoucherArr.map((item) => {
                        mapArr.push(<VoucherCard voucherBalance={voucherBalance} indexVoucher={item} data={d} key={i} />)
                    }) :  mapArr.push(<VoucherCard voucherBalance={voucherBalance} data={d} key={i} />)
                  
                })
                break;
            case 'GOLD':
                accountList.mintData.map((d, i) => {
                    dataGoldArr && dataGoldArr.length > 0 ? dataGoldArr.map((item) => {
                        mapArr.push(<GoldCard goldBalance={goldBalance} indexGold={item} data={d} key={i} />)
                    }) : mapArr.push(<GoldCard goldBalance={goldBalance} data={d} key={i} />)
                })
                break;
            default:
                break;
        }
        setListData(mapArr)
    }, [type, JSON.stringify(dataVoucherArr), JSON.stringify(dataGoldArr)])

    return (
        <Wrapper>
            <Box fontSize="30px" fontFamily="SFProTextBold" mb="20px">
                My Account
            </Box>
           <AccountBox>
               <Flex>
                    <Box
                        fontSize="16px"
                        textAlign="left"
                        maxWidth="95%"
                    >
                        {shortenAccount()}
                    </Box>
                    <Box
                        onClick={() => {
                            navigator.clipboard.writeText(account)
                        }}
                        sx={{
                            cursor: 'pointer',
                            '& svg': {
                                color: '#A0A0A0',
                            },
                            '& svg:hover' : {
                                color: '#F0F0F0',
                            }
                        }}
                    >
                        <ContentCopyIcon maxWidth="5%"/>
                    </Box>
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
                            {balanceOf}
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
                        NFTs: <span className='text-yellow-400'> {allNft} </span>
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
            <Paginating listData={listData ?? []} perChunk={6} />
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
