import { useState, useCallback } from 'react'
import Countdown from 'react-countdown';
import Text from 'components/Text/Text'
import Button from 'components/Button/Button'
import UnlockButton from 'components/UnlockButton/UnlockButton'
import styled from 'styled-components'
import useKardiachain from 'hooks/useKardiachain';
import useToast from 'hooks/useToast';
import { approve } from 'utils/callHelpers'
import { getERC20Contract } from 'utils/contractHelpers'
import fetchUserPoolNft from '../hooks/fetchUserPoolNft';
import { useStakePoolNft, useWithdrawPoolNft, useClaimPoolNft } from '../hooks/usePoolNft';

const Card = ({ data }) => {
    const { account } = useKardiachain();
    const {toastSuccess, toastError} = useToast();
    const [pendingTx, setPendingTx] = useState(false)
    const { image, desciptions, title, allowance, tokenAddress, contractAddress, totalUser = 0, userLimit = 0, totalTimeStakeRequire, userData } = data
    const { onStake } = useStakePoolNft(contractAddress)
    const { onWithdraw } = useWithdrawPoolNft(contractAddress)
    const { onClaim } = useClaimPoolNft(contractAddress)
    const timeNow = new Date().getTime()
    const timeCountDown = (Number(userData?.timeStake) + Number(totalTimeStakeRequire)) * 1000
    const checkTimeClaim = timeNow > timeCountDown
    const isUserLimited = totalUser === userLimit
    const handleApprove = async() => {
        const contract = getERC20Contract()
        try {
            setPendingTx(true);
            await approve(contract, contractAddress, tokenAddress.address, account)
            await fetchUserPoolNft(account)
            toastSuccess('Approved', `Approve successful !`);
            setPendingTx(false);
        } catch (e) {
            console.log(e);
            setPendingTx(false);
            toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
            console.error(e);
        }
    }

    const handleStake = useCallback(async () => {
        try {
            setPendingTx(true);
            await onStake();
            await fetchUserPoolNft(account)
            toastSuccess('Staked', `Stake successful !`);
            setPendingTx(false);
        } catch (e) {
            console.log(e);
            setPendingTx(false);
            toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
            console.error(e);
        }
    }, [account, onStake, toastError, toastSuccess]);

    const handleWithdraw = useCallback(async () => {
        try {
            setPendingTx(true);
            await onWithdraw();
            await fetchUserPoolNft(account)
            toastSuccess('Withdraw', `Withdraw successful !`);
            setPendingTx(false);
        } catch (e) {
            console.log(e);
            setPendingTx(false);
            toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
            console.error(e);
        }
    }, [account, onStake, toastError, toastSuccess]);

    const handleClaim = useCallback(async () => {
        try {
            setPendingTx(true);
            await onClaim();
            await fetchUserPoolNft(account)
            toastSuccess('Claimed', `You just claim a voucher nft !`);
            setPendingTx(false);
        } catch (e) {
            console.log(e);
            setPendingTx(false);
            toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
            console.error(e);
        }
    }, [account, onClaim, toastError, toastSuccess]);


    return(
        <>
            <div className="w-full md:w-2/3">
                <BoxCard className="md:flex p-5 md:p-8 gap-8 md:h-80">
                    <div>
                        <img src="/poolvoucher.png" className="rounded-xl h-full w-full md:w-auto"/>
                    </div>
                    <div className="mt-5 md:mt-0 flex-1 flex flex-col justify-between">
                        <p className="text-primary font-bold text-lg md:text-xl">{ title }</p>
                        <div className="mt-3">
                            {
                                desciptions && desciptions.map((desciption, i) => {
                                    return (
                                        <div className="flex gap-2 items-center mb-1" key={i}>
                                            <svg width={14} height={10} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.3333 1.33301L5 8.66634L1.66667 5.33301" stroke="#FFC247" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <Text fontSize="14px" color="#ffffff80">{ desciption }</Text>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        { userData?.isStake && <div className="mt-3">
                            <span>Claim in: </span>
                            <Countdown date={timeCountDown} className="text-gray-300" />
                        </div> }
                        <StyleTotal className="mt-5 px-2 py-3 md:py-5 flex justify-between text-gray-400">
                            <span>Total User Staked</span>
                            <div className="flex items-center gap-2"><span>{ totalUser }</span> / <span className="text-primary">{ userLimit }</span></div>
                        </StyleTotal>
                        <div className="pt-5">
                        {/* {
                            account
                            ?
                            Number(allowance) > 0 ?
                                userData?.isStake ?
                                    <div className="flex gap-3">
                                        <Button className="w-full" onClick={handleWithdraw}>
                                            <span className="text-black">Unstake</span>
                                        </Button>
                                        {!userData?.isClaimNFT && <Button className="w-full" onClick={handleClaim} disabled={!checkTimeClaim}>
                                            <span className="text-black">Claim</span>
                                        </Button> }
                                    </div>
                                :
                                    isUserLimited
                                    ?
                                        <Button className="w-full" disabled={true}>
                                            <span className="text-black">Pool Limited</span>
                                        </Button>
                                    :
                                        <Button className="w-full" onClick={handleStake} disabled={userData?.isCount}>
                                            <span className="text-black">{ userData?.isCount ? "You already staked and claim NFT" : "Stake"}</span>
                                        </Button>
                                :
                                    isUserLimited
                                    ?
                                        <Button className="w-full" disabled={true}>
                                            <span className="text-black">Pool Limited</span>
                                        </Button>
                                    :
                                        <Button className="w-full" onClick={handleApprove}>
                                            <span className="text-black">Approve Contract</span>
                                        </Button>
                            :
                                <UnlockButton className="text-black p-2 w-full" scale="md" />
                        } */}
                        </div>
                    </div>
                </BoxCard>
            </div>
            <div className="w-full md:w-1/3 mt-3 md:mt-0">
                <BoxCard className="p-5 md:p-8 h-full">
                    <p className="text-primary text-lg md:text-xl font-bold mb-3">Random rewards</p>
                    <p className="text-white mb-3">Stake to claim one of the rewards</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
                        <img src="/50k.png"/>
                        <img src="/100k.png"/>
                        <img src="/200k.png"/>
                        <img src="/300k.png"/>
                    </div>
                </BoxCard>
            </div>
        </>
    )
}


const BoxCard = styled.div`
    box-shadow: 0 10px 15px -3px rgb(165 165 165 / 3%), 0 4px 6px -2px rgb(165 165 165 / 3%);
    background-color: #2D2E31;
    border-radius: 14px;
`

const StyleTotal = styled.div`
    background-color: rgba(0,0,0,0.3);
    border-radius: 8px;
    box-shadow: 0 6px 12px 0 rgb(163 163 163 / 6%), 0 -1px 2px 0 rgb(255 255 255 / 2%);
`

export default Card