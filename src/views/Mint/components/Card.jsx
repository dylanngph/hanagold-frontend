import useKardiachain from 'hooks/useKardiachain';
import Text from 'components/Text/Text'
import UnlockButton from 'components/UnlockButton/UnlockButton'
import Button from 'components/Button/Button';
import styled from 'styled-components'

const Card = ({ data }) => {
    const { title, listTokens } = data
    const { account } = useKardiachain();
    return(
        <CardWrap>
            <img height="280px" src="/images/mint/mint_nft.png" width="100%" alt={title} />
            <CardBody>
                <Text color="secondary" bold fontSize="20px" mb="12px">{title}</Text>
                <ListItems className="items-center">
                {
                    listTokens.map((d, i) => {
                        return(
                            <Item className="items-center">
                                <div className="flex items-center gap-2 px-3 py-1 w-20">
                                    <img width="23px" src={`/tokens/${d.name.toLocaleLowerCase()}.png`} alt="HNG" />
                                    <Text bold color="#ffffff61">{ d.name }</Text>
                                </div>
                                <div>
                                    <Text ml="20px" bold color="textWhite">{ d.required }</Text>
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
                        <Button className="w-full text-black" scale="sm">
                            Mint
                        </Button>
                    :
                        <UnlockButton className="text-black p-2 w-full" scale="sm" />
                }
                </div>
            </CardBody>
        </CardWrap>
    )
}

const CardWrap = styled.div`
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 0 0px #ffffff0d, 0 0 20px #ffffff00, 0 0 20px #ffffff0f;
`

const CardBody = styled.div`
    background: rgba(255, 255, 255, 0.1);
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