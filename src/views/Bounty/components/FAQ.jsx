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
                        Established in 2020, HanaGold Jewelry Joint Stock Company is an innovative start-up enterprise in the sector of gold, silver, and gemstones. We apply technology in the jewelry business with a pioneering project called HanaGold. With the potential of the 4.0 technology era along with the demand of gold consuming and investing, HanaGold quickly seizes the opportunity to develop the jewelry industry in Vietnam by a trailblazing model, creating a breakthrough for the jewelry business in Vietnam.
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
                            Bounty NFTs are NFTs that users can obtain by completing specific tasks set out by HanaGold, following hanaGold's communication channels for the latest and most accurate information.
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
                            The vouchers NFT will have different values, for the voucher received in the whitelist will be worth 300k, in addition, there are other vouchers worth from 50-300k
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