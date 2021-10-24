import { useCallback, useState } from "react"
import Text from 'components/Text/Text'
import UnlockButton from 'components/UnlockButton/UnlockButton'
import Button from 'components/Button/Button';
import useKardiachain from 'hooks/useKardiachain';
import styled from 'styled-components'
import { useClaimBounty } from '../hooks/useClaimBounty';
import fetchUserBounty from '../hooks/fetchUserBounty'
import useToast from 'hooks/useToast';

const Card = ({ data }) => {
    const { account } = useKardiachain();
    const { title, id, image, details, totalSupply = 0, contractAddress, whiteList } = data
    const [pendingTx, setPendingTx] = useState(false);
    const { onClaim } = useClaimBounty(contractAddress)
    const {toastSuccess, toastError} = useToast();

    const handleClaim = useCallback(async () => {
        try {
            setPendingTx(true);
            await onClaim();
            await fetchUserBounty(account)
            toastSuccess('Claimed', `Your just claim ${title}`);
            setPendingTx(false);
        } catch (e) {
            console.log(e);
            setPendingTx(false);
            toastError('Canceled', 'Please try again. Confirm the transaction and make sure you are paying enough gas!');
            console.error(e);
        }
    }, [account, onClaim, toastError, toastSuccess]);

    return(
        <CardWrapper>
            {/* <img src="images/bounties/bow_tie.png" alt="Bow Tie" /> */}
            <div className="rounded-lg overflow-hidden">
                <img height="280px" src={image} width="100%" alt={title} />
                <CardBody>
                    <Text color="secondary" bold fontSize="20px" mb="12px">{ title }</Text>
                    <div>
                    {
                        details.map((d, i) => {
                            return (
                                <div key={i} className="flex gap-2 items-center mb-1">
                                    <svg width={14} height={10} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.3333 1.33301L5 8.66634L1.66667 5.33301" stroke="#FFC247" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <Text fontSize="14px" color="#ffffff80">{ d }</Text>
                                </div>
                            )
                        })
                    }
                    </div>
                    <StyleTotal className="mt-5 px-2 py-3 flex justify-between">
                        <span className="text-gray-400">Total</span>
                        <span className="text-primary">{totalSupply.toString()}</span>
                    </StyleTotal>
                    <div className="mt-5">
                        {/* <Button to="/" className="w-full text-black" scale="sm">See more</Button> */}
                    {
                        account
                        ?
                            <Button className="w-full text-black" scale="md" onClick={handleClaim} disabled={pendingTx || !whiteList}>
                                { whiteList ? pendingTx ? "Claiming" : "Claim" : "Be a whitelist user to claim " }
                            </Button>
                        :
                            <UnlockButton className="text-black p-2 w-full" scale="md" />
                    }
                    </div>
                </CardBody>
            </div>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    cursor: pointer;
    box-shadow: 0 10px 15px -3px rgb(255 255 255 / 3%), 0 4px 6px -2px rgb(255 255 255 / 1%);
    position: relative;
`

const CardBody = styled.div`
    background: #2E2D2D;
    padding: 15px;
`

const StyleTotal = styled.div`
    background-color: rgba(0,0,0,0.3);
    border-radius: 8px;
`

export default Card