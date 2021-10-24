import styled from 'styled-components'
import Text from 'components/Text/Text'

const FAQ = () => {
    return(
        <div className="w-full">
            <div className="px-5 mt-10">
                <FaqWrap className="p-3 md:p-10">
                    <div className="mb-6">
                        <div className="text-primary mb-2">
                            <Text color="textPrimary" bold className="flex items-center gap-2">
                                <CircleNumber>1</CircleNumber>
                                What is HANAGOLD ?
                            </Text>
                        </div>
                        <div className="pl-10 text-gray-400 leading-5">
                            HANAGOLD comes from Japan, based on the A (Animation) C (Comic) G (Game) N (Novel) culture that originated in Japan and is widely loved all over the world, combined with the leading NFT and DeFi technologies in the blockchain, by introducing a large number of ACGN Well-known IP and designers in the field, make full use of the “interoperability” advantage of blockchain technology, allowing toy figures in the real world to interact with NFT’s in the virtual world in the JOJO.FUN metaverse, breaking the dimensional barriers. Finally, a world-class pan-entertainment platform based on blockchain technology will be built.
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="text-primary mb-2">
                            <Text color="textPrimary" bold className="flex items-center gap-2">
                                <CircleNumber>2</CircleNumber>
                                What is HANAGOLD Bounty NFT ?
                            </Text>
                        </div>
                        <div className="pl-10 text-gray-400 leading-5">
                            In HANAGOLD Tokenomic, 10% of each HANAGOLD transaction amount on the blockchain will be deducted and redistributed, 3% of it will be allocated to NFT Pool. We will set up a special “HANAGOLD Bounty Pool”, after completing HANAGOLD Bounty, the users can get NFT rewards with corresponding HashRate, and stake NFT in the “HANAGOLD Bounty Pool” to earnHANAGOLD rewards.
                        </div>
                    </div>
                    <div>
                        <div className="text-primary mb-2">
                            <Text color="textPrimary" bold className="flex items-center gap-2">
                                <CircleNumber>3</CircleNumber>
                                Bounty Type
                            </Text>
                        </div>
                        <div className="pl-10 text-gray-400 leading-5">
                        HANAGOLD Bounty NFT is divided into 2 types, including “HANAGOLD Routine Bounty NFT” and “HANAGOLD SSR Bounty NFT”.
                        </div>
                    </div>
                </FaqWrap>
            </div>
        </div>
    )
}

const FaqWrap = styled.div`
    background-color: #2E2D2D;
    border-radius: 14px;
    box-shadow: 0 10px 15px -3px rgb(255 255 255 / 3%), 0 4px 6px -2px rgb(255 255 255 / 1%);
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

export default FAQ