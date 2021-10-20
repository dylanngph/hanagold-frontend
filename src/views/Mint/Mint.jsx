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
		<Page style={{ backgroundImage: `url('/images/mint/bg_mint.png')`}}>
			<PageHeader
				title="Mint NFT"
				subTitle="Mint HNG NFT"
			/>
					<div className="flex justify-center items-center">
					{
						userData.map((d, i) => <Card data={d} key={i} />)
					}
					</div>
		</Page>
	);
};

export default Mint;