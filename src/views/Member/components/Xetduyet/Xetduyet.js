
import Capdo from 'views/Member/components/Xetduyet/capdo';
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';

function Xetduyet (){
  
    return(
        <div className="mt-5">
            <StyledTitle className="text-center mb-4">ĐIỀU KIỆN XÉT DUYỆT ĐỐI TÁC KINH DOANH</StyledTitle>
            <Capdo></Capdo>
        </div>
        
                
         
    );
   
   
}

export default Xetduyet;