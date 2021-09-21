import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';
import styled from 'styled-components';
import Text from 'components/Text/Text';
const Myst = styled.div`
  width:100%;
`
const Img = styled.img`
    width:70px;
    cursor: pointer;
`

function Quytrinh (){
  
    return(
        <div className="container">
            <StyledTitle className="text-center pb-4"> QUY TRÌNH</StyledTitle>
            <div className="row justify-content-center align-items-center">
                    <div className="col-md-3 col-12 float-left Mymargin vien pt-5 pb-5">
                        <div className="col-md-12 col-12 pt-4 pb-3 Canhgiua">
                            <Img src="icon/m3.svg"></Img>
                        </div>
                        <Text fontSize="22px" className="text-center pb-4">Đăng ký địa chỉ krc20 với hệ thống tạo ra</Text>
                    </div>
                    <div className="col-md-3 col-12 float-left Mymargin vien pt-5 pb-5">
                        <div className="col-md-12 col-12 pt-4 pb-3 Canhgiua">
                            <Img src="icon/m2.svg"></Img>
                        </div>
                        <Text fontSize="22px" className="text-center pb-4">Một mã invite code cho mỗi đối tác</Text>
                    </div>
                    <div className="col-md-3 col-12 float-left Mymargin vien pt-3 pb-3">
                        <div className="col-md-12 col-12 pt-4 pb-3 Canhgiua">
                            <Img src="icon/m1.svg"></Img>
                        </div>
                        <Text fontSize="22px" className="text-center pb-4">Sẽ có 1 pool Partner, trích 5% farm LTD để chia sẽ cho tất cả đối tác kinh doanh</Text>
                    </div>
            </div>
        </div>
    );
   
}

export default Quytrinh;