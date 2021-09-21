import Text from 'components/Text/Text';
import 'styles/index.css';
import Button from 'components/Button/Button';

function DIPOContent(){
    return (
        <div className="col-md-12 col-12">
            <div className="row mt-5 mb-5 justify-content-center pl-3 pr-3">
            <div className="col-md-8 col-11">
                <Text fontSize="30px" bold className="text-center pt-5">Launch a project on LiveTrade now!</Text>
                <Text fontSize="16px" className="text-center mt-3">LiveTrade Launchpad is the platform that helps and advises project teams on how to best issue and launch their token. We provide a full service offering starting from advisory services from before the token is even issued, to post-listing and marketing support. Our goal is to allow project teams to focus on their project development and continue building products, while we handle the marketing, exposure and initial user base. We look for strong teams with a unique and innovative vision in the crypto space. If you think you are one of these projects. 
                        apply below!
                    </Text>
                <div className="text-center">
                    <Button mt="20px" className="widthbtn" onClick={"#"}>Apply to<b className="pl-1">Launch</b></Button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default DIPOContent;