import Text from 'components/Text/Text';
import { useState } from 'react';
import styled from 'styled-components';
import 'styles/index.css';
import DIPOTabUpcoming from './DIPOTabUpcoming';
const Img = styled.img`
    padding-top:0;
    width:80px;
    cursor: pointer;
`
const borderlocal={
    "border":"1px solid #fff",
    "width":"60%",
    "border-radius":"20px"
}
const backgroundlocal={
    "border":"2px solid #fdb533",
    "clip-path": "circle(50% at center)"
}

function DIPODetails(){
    const [data,setdata]=useState([
        {
            logo:"images/Ellipse_12_1.png",
            brand:"LPD",
            subbrand:"KAI",
            content:"LPD Invest is a 100% Singapore-invested enterprise with a business license 202112208Z, raising capital from the financial market in Singapore and investing directly in LPD Vietnam in the fields of real estate and golf with growth potential, more than 300%/year in golf field.",

        },
        {
            logo:"images/Ellipse_12.png",
            brand:"GetDone",
            subbrand:"KAI",
            content:"Decentralized Job Marketplace for Global Freelancers. Getdone is A Platform for Hiring Trusted Blockchain Talents. All freelancers on Getdone are chosen in the strict process to ensure that they are experienced or experts in blockchain industry."
        }
    ]);
    return(
        <div className="container">
            <DIPOTabUpcoming></DIPOTabUpcoming>
            <div className="row">
                {data.map((item,key)=>{
                    return(
                        <div className="col-md-6 col-12 pl-3 pr-3 mt-5 float-left" key={key}>
                        <div className="fullwidth vien pl-2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 col-4 float-left Canhgiua pt-5 pb-3">
                                        <Img src={item.logo} onClick={()=> window.location.replace('/#/demotest')}></Img>
                                        
                                    </div>
                                    <div className="col-md-3 col-4 float-left pt-5">
                                        <Text fontSize="20px" color="secondary" bold>{item.brand}</Text>
                                        <Text style={borderlocal} className="text-center">{item.subbrand}</Text>
                                    </div>
                                    <div className="col-md-4 col-4 float-left"></div>
                                </div>
                            </div>
                            <div className="container">
                                <Text fontSize="16px">{item.content}</Text>
                            </div>
                            <div className="container mt-4 pb-5">
                                <div className="row">
                                    <div className="col-md-5 col-4 float-left">
                                        <div className="circle pt-3">
                                            <div className="col-md-12 col-12 Canhgiua">
                                                <Img src="images/Vectary_texture.png" className="Imgmobile"></Img>
                                            </div>
                                            <Text className="Canhgiua Size18" color="secondary">Upcoming</Text>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-8 float-left">
                                        <div className="row pt-3 pb-3">
                                            <div className="col-md-6 col-6 float-left">
                                                <Text fontSize="18px">Swap rate</Text>
                                                <Text fontSize="18px" bold>TBA</Text>
                                            </div>
                                            <div className="col-md-6 col-6 float-left">
                                                <Text fontSize="18px">Cap</Text>
                                                <Text fontSize="18px" bold>$000,000</Text>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-6 float-left ">
                                                <Text fontSize="18px">Access</Text>
                                                <Text fontSize="18px" bold>Public</Text>
                                            </div>
                                            <div className="col-md-6 col-6 float-left">
                                                <Text fontSize="18px">Open in</Text>
                                                <Text fontSize="18px" bold>00:00:00</Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                    );
                })}
                /** */
               
            /** */
            </div>
        </div>
       
    );
}
export default DIPODetails;