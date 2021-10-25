import { useCallback, useState, useEffect, useMemo } from "react"
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import useKardiachain from 'hooks/useKardiachain';
import Text from 'components/Text/Text'
import UnlockButton from 'components/UnlockButton/UnlockButton'
import Button from 'components/Button/Button';
import styled from 'styled-components'
import bouties from 'constants/bounties';
import { fetchBounty } from '../hooks/fetchUserBounty'
import useToast from 'hooks/useToast';
import { useClaimBounty } from '../hooks/useClaimBounty';
import useRefresh from 'hooks/useRefresh'

const DetailBounty = ({
    match: {
        params: { id },
    },
    history,
  }) => {
    const data = bouties.find((bounty) => bounty.id === Number(id))
    const [dataBounty, setDataBounty] = useState(data)
    const { account } = useKardiachain()
    const [pendingTx, setPendingTx] = useState(false);
    const { fastRefresh } = useRefresh()
    const {toastSuccess, toastError} = useToast();
    const { title, details, voucherImage, isWhiteList, contractAddress, totalSupply } = dataBounty
    const { onClaim } = useClaimBounty(contractAddress)

    const handleClaim = useCallback(async () => {
        try {
            setPendingTx(true);
            await onClaim();
            await fetchBounty(account, id)
            toastSuccess('Claimed', `Your just claim ${title}`);
            setPendingTx(false);
        } catch (e) {
            console.log(e);
            setPendingTx(false);
            toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
            console.error(e);
        }
    }, [account, onClaim, toastError, toastSuccess]);

    useEffect(async() => {
        if (!account) return
        const result = await fetchBounty(account, id)
        setDataBounty(result)
    }, [account, id, fastRefresh])


    return(
        <Page>
            <PageHeader
				title="Voucher NFT"
				subTitle="HanaGold Voucher Bounty Collection"
			/>
            {
                <div className="p-5">
                    <div className="md:flex gap-3">
                        <div className="w-full md:w-2/3">
                            <CardWrap className="p-5">
                                <div className="md:flex gap-5">
                                    <div className="w-full md:w-1/3">
                                        <img src={ voucherImage } className="w-full rounded-xl" />
                                    </div>
                                    <div className="mt-5 md:mt-0 flex flex-col flex-1 justify-between">
                                        <Text color="secondary" bold fontSize="20px" mb="12px">{ title }</Text>
                                        {
                                            details && details.map((detail, i) => {
                                                return (
                                                    <div className="flex gap-2 items-center mb-1" key={i}>
                                                        <svg width={14} height={10} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.3333 1.33301L5 8.66634L1.66667 5.33301" stroke="#FFC247" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <Text fontSize="14px" color="#ffffff80">{ detail }</Text>
                                                    </div>
                                                )
                                            })
                                        }
                                        <StyleTotal className="mt-5 px-2 py-3 flex justify-between">
                                            <span className="text-gray-400">Total</span>
                                            <span className="text-primary">{ totalSupply }</span>
                                        </StyleTotal>
                                        <div className="mt-5">
                                        {
                                            account
                                            ?
                                                <Button className="w-full text-black" scale="md" onClick={handleClaim} disabled={pendingTx || !isWhiteList}>
                                                    { isWhiteList ? pendingTx ? "Claiming" : "Claim" : "Be a whitelist user to claim " }
                                                </Button>
                                                    // <Button className="w-full text-black" scale="md" onClick={handleClaim} disabled={pendingTx || !whiteList}>
                                                //     { whiteList ? pendingTx ? "Claiming" : "Claim" : "Be a whitelist user to claim " }
                                                // </Button>
                                            :
                                                <UnlockButton className="text-black p-2 w-full" scale="md" />
                                        }
                                        </div>
                                    </div>
                                </div>
                                <ListItems className="mt-10 bg-black-400 p-5 rounded-lg">
                                    <div className="flex gap-5 items-center mb-5">
                                        <div className="text-primary font-bold text-xl">{ title }</div>
                                    </div>
                                    <div className="text-gray-400 leading-7">
                                        <p>Hanagold voucher NFT is a NFT which is produce by HanaGold.</p>
                                        <p>Only users who are on the whitelist can claim this NFT.</p>
                                        <p>To join in the whitelist, user have to Buy HNG when it IDO on Kaimond and only first 100 user can join in this whitelist.</p>
                                        <p>This voucher can be use to sell on the marketplace or apply this NFT as a discount voucher when buying hanagold products.</p>
                                    </div>
                                </ListItems>
                            </CardWrap>
                        </div>
                        <div className="w-full md:w-1/3">
                            <CardWrap className="p-5">
                                <div className="text-primary font-bold text-xl">How to use ?</div>
                                <div className="mt-3 text-lg">Task steps</div>
                                <div className="mt-5 leading-5 text-gray-400">
                                    <p className="mb-5"><span className="text-primary">1.</span> Be one of 100 first user who buy IDO on Kaimond</p>
                                    <p className="mb-5"><span className="text-primary">2.</span> Access to HanaGold Dapp and connect your wallet</p>
                                    <p className="mb-5"><span className="text-primary">3.</span> Access to HanaGold Dapp and connect your wallet</p>
                                    <p className="mb-5"><span className="text-primary">4.</span> Apply this NFT when buying a product in marketplace sold by HanaGold</p>
                                </div>
                            </CardWrap>
                        </div>
                    </div>
                </div>
            }
        </Page>
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

const StyleTotal = styled.div`
    background-color: rgba(0,0,0,0.3);
    border-radius: 8px;
    box-shadow: 0 6px 12px 0 rgb(163 163 163 / 6%), 0 -1px 2px 0 rgb(255 255 255 / 2%);
`

export default DetailBounty