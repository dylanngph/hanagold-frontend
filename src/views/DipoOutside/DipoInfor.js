import styled from 'styled-components';
import "styles/index.css";
import Button from 'components/Button/Button';
import Text from 'components/Text/Text';
const Img = styled.img`
    padding-top:0;
    width:80px;
    cursor: pointer;
`
const borderlocal={
    "border":"1px solid #fff",
    "width":"100%",
    "border-radius":"20px"
}
const Icon = styled.img`
    padding-top:0;
    width:25px;
    cursor: pointer;
`
function DipoInfor() {
    return(
        <div className="col-md-12 mt-4">
            <div className="row pt-4 pb-4">
                <div className="col-md-7 col-12 float-left">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-3 float-left">
                                <Img src="images/Ellipse_12_1.png"></Img>
                            </div>
                            <div className="col-md-3 col-3 float-left">
                                <Text  fontSize="18px" color="secondary">LPD</Text>
                                <Text className="text-center mt-2" fontSize="19px" style={borderlocal}>KAI</Text>
                            </div>
                            <div className="col-md-6 col-6 float-left">
                                <div className="container pl-0 pr-0">
                                    <div className="row" >
                                            <div className="col-md-3 col-3 float-left pr-0"><Icon className="float-right pt-1" src="icon/ei_clock.svg"></Icon></div>
                                            <div className="col-md-8 col-9 float-left"><Text fontSize="18px">Open in: 00:00:00</Text></div>
                                    </div>
                                </div>
                                <div className="container Canhgiua mt-2">
                                    <Icon style={{"width":"35px "}} src="icon/tw.svg"></Icon>
                                    <Icon style={{"width":"35px "}} className="ml-1 mr-1" src="icon/tw.svg"></Icon>
                                    <Icon style={{"width":"35px "}} src="icon/tw.svg"></Icon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <Text fontSize="16px">
                        LPD Invest is a 100% Singapore-invested enterprise with a business license 202112208Z, raising capital from the financial market in Singapore and investing directly in LPD Vietnam in the fields of real estate and golf with growth potential, more than 300%/year in golf field.
                        </Text>
                    </div>
                    <div className="container mt-2">
                        <Button>Connect  Wallet</Button>
                    </div>
                </div>
                /* */
                <div className="col-md-4 float-left vien pt-3 pb-3 ml-2 mr-2">
                    <div className="container">
                        <Text className="Canhgiua" fontSize="20px" >First Come First Serve opens in</Text>
                        <Text className="Canhgiua" fontSize="20px" bold color="secondary">00:00:00</Text>
                    </div>
                    <hr className="strikethrough"></hr>
                    <div className="container">
                        <Text className="Canhgiua" fontSize="20px" >Allocation round</Text>
                        <Text className="Canhgiua" fontSize="20px" bold color="secondary">000 Participants</Text>
                    </div>
                    <hr className="strikethrough"></hr>
                    <div className="container">
                        <Text className="Canhgiua" fontSize="20px" >Total LTD Staked</Text>
                        <Text className="Canhgiua" fontSize="20px" bold color="secondary">000,000.000</Text>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DipoInfor;