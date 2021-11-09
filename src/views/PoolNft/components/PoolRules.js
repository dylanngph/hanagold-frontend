const PoolRule = () => {
    return(
        <div className="p-5 mt-5">
            <div className="md:w-2/3">
                <div className="mb-5">
                    <p className="text-xl font-bold">Pool Rules</p>
                </div>
                <div className="text-gray-400 leading-7">
                    <p>1. The anount of HNG you need to stake to the Pool is 99 HNG</p>
                    <p>2. Stake in 7 days, after 7 days you can claim a random voucher NFT. The nft vouchers that can be received are: 50k 100k 200k 300k vouchers</p>
                    <p>3. In case the user has already staked and unstaked after that, the timer will be reset and when user stake again the time will be calculated from the beginning</p>
                    <p>4. Pool is limited to 500 people only.</p>
                </div>
            </div>
        </div>
    )
}

export default PoolRule