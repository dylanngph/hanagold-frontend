import { useEffect, useState, useMemo } from 'react'
import poolNft from 'constants/poolNft'
import Page from 'components/Layout/Page'
import PageHeader from 'components/PageHeader/PageHeader'
import useKardiachain from 'hooks/useKardiachain';
import fetchUserPoolNft from './hooks/fetchUserPoolNft'
import PoolRule from './components/PoolRules'
import useRefresh from 'hooks/useRefresh'
import Card from './components/Card'

const PoolNft = () => {
    const { account } = useKardiachain();
    const [poolData, setPoolData] = useState(poolNft)
    const { fastRefresh } = useRefresh()

    useEffect(async() => {
        if (account) {
            const data = await fetchUserPoolNft(account)
            setPoolData(data)
        }
    }, [account, fastRefresh])

    return(
        <Page>
            <PageHeader
                title="Pool Voucher NFT"
				subTitle="Pool Voucher NFT"
            />
            <div className="md:flex p-5 gap-3">
            {
				poolData.map((d, i) => <Card data={d} key={i} />)
			}
            </div>

            <PoolRule/>
        </Page>
    )
}

export default PoolNft