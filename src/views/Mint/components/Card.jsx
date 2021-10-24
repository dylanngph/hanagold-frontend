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
    const { title, listTokens, contractAddress, id, video, description } = data
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
        <div className="p-5">
            <div className="md:flex gap-3">
                <div className="w-full md:w-2/3">
                    <CardWrap className="p-5">
                        <div className="md:flex gap-5">
                            <div className="w-full md:w-1/3">
                                <video autoPlay loop muted className="h-full">
                                    <source src={video} type="video/mp4"></source>
                                </video>
                            </div>
                            <div className="mt-5 md:mt-0 flex flex-col flex-1">
                                <Text color="secondary" bold fontSize="20px" mb="12px">{title}</Text>
                                <div className="md:text-lg text-gray-400 mb-3">{ description }</div>
                                <ListItems className="items-center">
                                {
                                    listTokens.map((d, i) => {
                                        return(
                                            <Item className="items-center">
                                                <div className="flex items-center gap-2 px-3 py-2 w-20">
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
                                <div className="mt-5">
                                {
                                    account
                                    ?
                                        <Button className="w-full text-black" scale="md" disabled={pendingTx || filterAllowance.length > 0} onClick={handleMint}>
                                        { filterAllowance.length ? "Approve contract to mint" : pendingTx ? "Minting..." : "Mint" }
                                        </Button>
                                    :
                                        <UnlockButton className="text-black p-2 w-full" scale="md" />
                                }
                                </div>
                            </div>
                        </div>
                        <ListItems className="mt-10 bg-black-400 p-5 rounded-lg">
                            <div className="flex gap-5 items-center mb-5">
                                <img src="/images/mint/hng_token.png" alt="hng_token" />
                                <div className="text-primary font-bold text-xl">{ title }</div>
                            </div>
                            <div className="text-gray-400 leading-7">
                                <p>HNG NFT coin is a NFT product issued on the blockchain platform according to the convention </p>
                                <p>1 HNG NFT coin = 1 CHI + 10 HNG</p>
                                <p>Investors can mint to own this NFT gold coin at HanaGold's Dapp</p>
                                <div>Attributes of HNG NFT coin:</div>
                                <ul className="ml-3">
                                    <li>Quantity: equivalent to 1 gold thread</li>
                                    <li>Gold weight: 3.75g</li>
                                    <li>Gold: 24k</li>
                                    <li>Gold coin diameter: 17mm</li>
                                </ul>
                            </div>
                        </ListItems>
                    </CardWrap>
                </div>
                <div className="w-full md:w-1/3">
                    <CardWrap className="p-5">
                        <div className="text-primary font-bold text-xl">How to use ?</div>
                        <div className="mt-3 text-lg">Task steps</div>
                        <div className="mt-5 leading-5 text-gray-400">
                            <p className="mb-5"><span className="text-primary">1.</span> Buyers transact at HanaGold store directly with store manager</p>
                            <p className="mb-5"><span className="text-primary">2.</span> User transfers NFT gold coins to blockchain wallet address requested by store manager</p>
                            <p className="mb-5"><span className="text-primary">3.</span> After receiving the NFT and receiving the service fee, the store will ship out 1 gold thread of Kim Khong Tuoc and issue a sales invoice to the customer including gold coin and processing fee.</p>
                        </div>
                    </CardWrap>
                </div>
            </div>
        </div>
    )
}

const CardWrap = styled.div`
    box-shadow: 0 10px 15px -3px rgb(255 255 255 / 3%), 0 4px 6px -2px rgb(255 255 255 / 1%);
    background: #2E2D2D;
    border-radius: 14px;
`

const ListItems = styled.div`
    background: rgb(0 0 0 / 30%);
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgb(255 255 255 / 3%), 0 4px 6px -2px rgb(255 255 255 / 1%);

    > div:last-child {
        border-bottom: none;
    }
`

const CircleNumber = styled.div`
    background-color: #484848;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Item = styled.div`
    display: flex;
    border-bottom: 1px solid #474747;
`

export default Card