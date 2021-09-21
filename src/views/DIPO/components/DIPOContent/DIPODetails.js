import styled from 'styled-components';
import Text from 'components/Text/Text';
import 'styles/index.css';
const Img = styled.img`
    width:70px;
    cursor: pointer;
`
const Data=[
    {
        icon:"icon/001-network.svg",
        title:"Exposure",
        content:"Get exposure to the millions of Defily users around the world.",
    },
    {
        icon:"icon/003-evaporation.svg",
        title:"Liquidity",
        content:"Projects that are launched on Launchpad will be listed and have world-class liquidity in multiple trading pairs",
    },
    {
        icon:"icon/002-chip.svg",
        title:"Token Distribution",
        content:"Your token will immediately be distributed to a large user base that hold your token",
    },
    {
        icon:"icon/004-inbox.svg",
        title:"Future Synergy",
        content:"Project will receive extensive support and advice even after listing, having access to all areas of the LiveTrade ecosystem",
    }
];
function DIPODetails(){
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                {Data.map((item,key)=>{
                    return(
                    <div key={key} className="col-md-3 col-10 pl-2 pr-2 mt-3">
                        <div className="fullwidth vien pl-3 pr-3 pb-4 " style={{"height":"100%"}}>
                            <div className="container Canhgiua pt-4 ">
                                <Img src={item.icon}></Img>
                            </div>
                            <Text fontSize="24px" className="text-center pd-3 pt-3" bold>{item.title}</Text>
                            <Text fontSize="16px" className="text-center pd-3">{item.content}</Text>
                        </div>
                    </div>
                    );
                })}
                
            </div>
        </div>
    );
}
export default DIPODetails;