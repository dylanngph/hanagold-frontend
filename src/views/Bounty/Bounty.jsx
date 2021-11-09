import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import Card from './components/Card'
import FAQ from './components/FAQ'
import Banner from 'components/Banner/Banner'
import bouties from 'constants/bounties'
import useKardiachain from 'hooks/useKardiachain';
import { fetchUserBounty } from './hooks/fetchUserBounty'
import { useEffect } from 'react';
import { useState } from 'react';
import useRefresh from 'hooks/useRefresh'

const Home = () => {
	const { account } = useKardiachain();
	const { fastRefresh } = useRefresh()
	const [bountyList, setBountyList] = useState(bouties)

	useEffect(async() => {
		if (account) {
			const bounties = await fetchUserBounty(account)
			setBountyList(bounties)
		}
	}, [account, fastRefresh])

	return (
		<Page>
			<PageHeader
				title="Voucher NFT"
				subTitle="HanaGold Voucher Bounty Collection"
			/>
			<Banner
				backgroundImage="/images/banner_bounty.png"
				title="Hanagold Bounty NFT"
				description="For every contribution you make to the Hanagold ecosystem, you can get HNG BOUNTY NFT, and stake NFT to earn $HNG"
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
			{
				bountyList.map((d, i) => <Card data={d} key={i} />)
			}
			</div>
			<FAQ/>
		</Page>
	);
};

export default Home;