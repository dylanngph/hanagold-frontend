import { NavLink } from 'react-router-dom'
import Text from 'components/Text/Text'
import Button from 'components/Button/Button';
import styled from 'styled-components'

export const VoucherCard = ({ data , voucherBalance, indexVoucher }) => {
    const { title, id, image, details, voucherImage } = data;

    return(
        <NavLink to={`/bounty-detail/${id}`}>
            <CardWrapper>
                <div className="rounded-lg overflow-hidden">
                    <img height="200px" src={voucherImage} width="100%" alt={title} />
                    <CardBody>
                        <Text color="secondary" bold fontSize="20px" mb="12px">{ indexVoucher ? `#${indexVoucher} ${title}` : title }</Text>
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
                        {/* <StyleTotal className="mt-5 px-2 py-3 flex justify-between">
                            <span className="text-gray-400">Amount</span>
                            <span className="text-primary">{voucherBalance}</span>
                        </StyleTotal> */}
                    </CardBody>
                </div>
            </CardWrapper>
        </NavLink>
    )
}

export const GoldCard = ({ data , goldBalance, indexGold }) => {
    const { title, id, image, totalSupply = 0, contractAddress, whiteList } = data

    return(
        <NavLink to={`/bounty-detail/${id}`}>
            <CardWrapper>
                <div className="rounded-lg overflow-hidden">
                    <img height="200px" src={image} width="100%" alt={title} />
                    <CardBody>
                        <Text color="secondary" bold fontSize="20px" mb="12px">{ indexGold ? `#${indexGold} ${title}` : title }</Text>
                        <div>
                            <div className="flex gap-2 items-center mb-1">
                                <svg width={14} height={10} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3333 1.33301L5 8.66634L1.66667 5.33301" stroke="#FFC247" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <Text fontSize="14px" color="#ffffff80">Gold: 24K</Text>
                            </div>
                            <div className="flex gap-2 items-center mb-1">
                                <svg width={14} height={10} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3333 1.33301L5 8.66634L1.66667 5.33301" stroke="#FFC247" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <Text fontSize="14px" color="#ffffff80">Coin diametral: 17mm</Text>
                            </div>
                        </div>
                        {/* <div>
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
                        </div> */}
                        {/* <StyleTotal className="mt-5 px-2 py-3 flex justify-between">
                            <span className="text-gray-400">Amount</span>
                            <span className="text-primary">{goldBalance}</span>
                        </StyleTotal> */}
                        {/* <div className="mt-5">
                            <Button className="w-full">
                                <span className="text-black">Details</span>
                            </Button>
                        </div> */}
                    </CardBody>
                </div>
            </CardWrapper>
        </NavLink>
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