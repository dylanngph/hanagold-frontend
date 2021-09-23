
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';

function Reawards(){
    return(
            <div className="row"> 
            <div className="col-md-6 col-12 float-left mt-4 Nopadding-right" >
               <div className="fullwidth vien">
                    <div className="col-md-12 col-12 pt-4">
                        <StyledTitle className="Canhgiua">Rewards:</StyledTitle>
                    </div>
                    <div className="col-md-12 col-12 pb-4">
                        <StyledText ml="1" fontSize="50px" className="Canhgiua">0</StyledText>
                    </div>
               </div>
            </div>
            <div className="col-md-6 col-12 float-left mt-4 Nopadding-left" >
            <div className="fullwidth vien">
                    <div className="col-md-12 col-12 pt-4">
                        <StyledTitle className="Canhgiua">Giao dịch trong tháng</StyledTitle>
                    </div>
                    <div className="col-md-12 col-12 pb-4">
                        <StyledText ml="1" fontSize="50px" className="Canhgiua">2500$</StyledText>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default Reawards;