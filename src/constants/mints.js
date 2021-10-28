import tokens from "constants/tokens"

const mints = [
    {
        id: 1,
        title: "HANAGOLD NFT 24K",
        description: "One HANAGOLD NFT 24K equivalent to 1 gold thread",
        image: '/images/mintBannerCard.png',
        listTokens: [
            {
                token: tokens.hng,
                required: 10
            },
            {
                token: tokens.chi,
                required: 1
            }
        ],
        contractAddress: "0x85E1d047d68B940ff334Ce0e5Aad5F2004B625D6",
        video: "https://slate.textile.io/ipfs/bafybeigng3wtan7zvp5nvammpknvgsnohhxikpffymsot3yhlp4sgnhvse"
    }
]

export default mints