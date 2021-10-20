import { useCallback, useState } from "react"
import useKardiachain from 'hooks/useKardiachain';
import Text from 'components/Text/Text'
import UnlockButton from 'components/UnlockButton/UnlockButton'
import Button from 'components/Button/Button';
import styled from 'styled-components'
import { useMintNft } from '../hooks/useMintNFT';
import useToast from 'hooks/useToast';
import { approve } from 'utils/callHelpers'
import { getERC20Contract } from 'utils/contractHelpers'
import fetchUserMintNft from "../hooks/fetchUserMintNft"

const Card = ({ data }) => {
    const { title, listTokens, contractAddress, id, video } = data
    const { account } = useKardiachain()
    const [pendingTx, setPendingTx] = useState(false)
    const { onMint } = useMintNft(contractAddress)
    const {toastSuccess, toastError} = useToast();
    const filterAllowance = listTokens.filter((token) => token.allowance?.lte(0))

    const handleMint = useCallback(async () => {
        try {
            setPendingTx(true);
            await onMint();
            toastSuccess('Minted', `Your just mint ${title}`);
            setPendingTx(false);
        } catch (e) {
            console.log(e);
            setPendingTx(false);
            toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
            console.error(e);
        }
    }, [account, onMint, toastError, toastSuccess]);

    const handleApprove = async(tokenAddress) => {
        const contract = getERC20Contract()
        try {
            setPendingTx(true);
            await approve(contract, contractAddress, tokenAddress, account)
            await fetchUserMintNft(account)
            toastSuccess('Approved', `Approve successful !`);
            setPendingTx(false);
        } catch (e) {
            console.log(e);
            setPendingTx(false);
            toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
            console.error(e);
        }
    }

    return(
        <CardWrap>
            <video autoPlay loop muted>
                <source src={video} type="video/mp4"></source>
            </video>
            <CardBody>
                <Text color="secondary" bold fontSize="20px" mb="12px">{title}</Text>
                <ListItems className="items-center">
                {
                    listTokens.map((d, i) => {
                        return(
                            <Item className="items-center">
                                <div className="flex items-center gap-2 px-3 py-1 w-20">
                                    <img width="23px" src={`/tokens/${d.token.symbol.toLocaleLowerCase()}.png`} alt="HNG" />
                                    <Text bold color="#ffffff61">{ d.token.symbol }</Text>
                                </div>
                                <div>
                                    <Text ml="20px" bold color="textWhite">{ d.required }</Text>
                                </div>
                                <div className="ml-auto mr-2">
                                    { d.allowance?.lte(0) && <Button scale="xs" className="text-black" disabled={pendingTx} onClick={() => handleApprove(d.token.address)}>Approve contract</Button> }
                                </div>
                            </Item>
                        )
                    })
                }
                </ListItems>
                {/* <div className="mt-5">
                {
                    account
                    ?
                        <Button className="w-full text-black" scale="sm" disabled={pendingTx || filterAllowance.length > 0} onClick={handleMint}>
                        { filterAllowance.length ? "Approve contract to mint" : pendingTx ? "Minting..." : "Mint" }
                        </Button>
                    :
                        <UnlockButton className="text-black p-2 w-full" scale="sm" />
                }
                </div> */}
            </CardBody>
        </CardWrap>
    )
}

const CardWrap = styled.div`
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 0 0px #ffffff0d, 0 0 20px #ffffff00, 0 0 20px #ffffff0f;
    width: 100%;
    ${({ theme }) => theme.mediaQueries.sm} {
        width: 370px;
    }
`

const CardBody = styled.div`
    background: #414143;
    padding: 15px;
`

const ListItems = styled.div`
    background: rgb(0 0 0 / 30%);
    border-radius: 8px;

    > div:last-child {
        border-bottom: none;
    }
`

const Item = styled.div`
    display: flex;
    border-bottom: 1px solid #474747;
`

export default Card