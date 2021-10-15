import Page from 'components/Layout/Page';
import PageHeader from 'components/PageHeader/PageHeader';
import Card from './components/Card'
import bouties from 'constants/bounties';
import useKardiachain from 'hooks/useKardiachain';
import fetchUserBounty from './hooks/fetchUserBounty'
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
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
				{
					bountyList.map((d, i) => <Card data={d} key={i} />)
				}
				</div>
      </Page>
  );
};

export default Home;