import { useEffect, useState } from 'react';
import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import Card from './components/Card'
import mints from 'constants/mints';
import useKardiachain from 'hooks/useKardiachain';
import useRefresh from 'hooks/useRefresh'
import fetchUserMintNft from "./hooks/fetchUserMintNft"

const Mint = () => {
	const { account } = useKardiachain();
	const { fastRefresh } = useRefresh()
	const [userData, setUserData] = useState(mints)
	useEffect(async() => {
		if (account) {
			const data = await fetchUserMintNft(account)
			setUserData(data)
		}
	}, [account, fastRefresh])
	// const [bountyList, setBountyList] = useState(bouties)

	// useEffect(async() => {
	// 	if (account) {
	// 		const bounties = await fetchUserBounty(account)
	// 		setBountyList(bounties)
	// 	}
	// }, [account, fastRefresh])

	return (
		<Page>
			<PageHeader
				title="Mint Gold NFT"
				subTitle="Mint HNG Gold NFT"
			/>
			{
				userData.map((d, i) => <Card data={d} key={i} />)
			}
		</Page>
	);
};

export default Mint;