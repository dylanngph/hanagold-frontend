import 'styles/index.css';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import Text from 'components/Text/Text';
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';
const Stylebtn={
    "background-color":"#b4e3f3 !important"
}


function About(){
    return (
        <div className="container">
            <div className="row justify-content-md-center ml-0 mr-0">
                <div className="col-md-9 col-12 vien Background1 pb-4" >
                    <div className="row justify-content-md-center ">
                        <div className="col-md-10 col-12 pt-3"> 
                            <Text fontSize="30px" className="text-center pt-3 pb-3">About DIPO</Text>
                            <Text fontSize="16px" className="text-center">
                                DIPO is a fundraising solution for SMBs and startups by allowing them issue tokens on the basis of their real assets. It is a proprietary model by LiveTrade, width a registered trademark, and awaiting patent form the United States Patent and Trademark Office. It works to support potential businesses and peoject in fundraising as well as offering a new finacial product to investors.
                            </Text>
                            <div className="text-center">
                                <Button mt="20px" className="widthbtn" onClick={"#"}>More about DIPO</Button>
                            </div>
                            
                        </div>
                    </div>
                    <div className="row justify-content-md-center justify-content-center mt-4 mb-4">
                        <div className="col-md-8 col-11 vien pb-4 Background2">
                            <Text fontSize="30px" className="text-center pt-3 pb-3">Statistics</Text>
                            <div className="row">

                                <div className="col-md-6 col-7 float-left">
                                    <Text fontSize="20px" className="pl-3 pt-1 pb-1">Total value raised</Text>
                                </div>
                                <div className="col-md-6 col-5 float-left">
                                    <Text fontSize="20px" className="float-right pr-3 pt-1 pb-1">$------M</Text>
                                </div>
                                <hr className="Gachngang2"></hr>
                                <div className="col-md-6 col-7 float-left">
                                    <Text fontSize="20px" className="pl-3 pt-1 pb-1">Number of projects</Text>
                                </div>
                                <div className="col-md-6 col-5 float-left">
                                    <Text fontSize="20px" className="float-right pr-3 pt-1 pb-1">------</Text>
                                </div>
                                <hr className="Gachngang2"></hr>
                                <div className="col-md-6 col-7 float-left">
                                    <Text fontSize="20px" className="pl-3 pt-1 pb-1">Current total capitalization</Text>
                                </div>
                                <div className="col-md-6 col-5 float-left">
                                    <Text fontSize="20px" className="float-right pr-3 pt-1 pb-1">$------M</Text>
                                </div>
                                <hr className="Gachngang2"></hr>
                                <div className="col-md-6 col-7 float-left">
                                    <Text fontSize="20px" className="pl-3 pt-1 pb-1">Deploying platforms</Text>
                                </div>
                                <div className="col-md-6 col-5 float-left">
                                    <Text fontSize="20px" className="float-right pr-3 pt-1 pb-1">------</Text>
                                </div>

                            </div>

                            <div className="text-center">
                                <Button mt="20px" className="widthbtn" onClick={"#"}>Running Projects</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default About;

