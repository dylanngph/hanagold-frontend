import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';
import styled from 'styled-components';
import Button from 'components/Button/Button';
const Img = styled.img`
    padding-top:5%;
    width:70px;
    cursor: pointer;
`
const Icon = styled.img`
  margin-right:5px;
  cursor: pointer;
  width:30px;
  padding-top:10px;
`
const Medal=()=>{
    function handleCopy(e) {
        e.preventDefault();
        document.execCommand('copy', false, document.getElementById('InputData').select());
    }
    return(
        <div className="col-md-12 col-12 pr-0 pl-0">
            <div className="row">
                <div className="col-md-6 col-12 float-left mt-4 pl-0 Nopadding-right">
                    <div className="fullwidth vien">
                        <div className="col-md-12 col-12 pt-5">
                            <StyledTitle className="Canhgiua">Huy chương</StyledTitle>
                        </div>
                        <div className="col-md-12 col-12 pb-4 Canhgiua">
                            <Img src="images/level/hv.png"></Img>
                        </div>
                        <hr class="col-md-12 col-12 Gachngang Canhgiua"></hr>
                        <div className="col-md-12 col-12 pt-3">
                            <StyledTitle className="text-center" >Sao chép và chia sẽ <br></br> mã Refer cho bạn bè</StyledTitle>
                        </div>
                        <div className="col-md-12 col-12 mt-3">
                            <div className="row pl-3 pr-3">
                                <div className="col-md-10 col-9 float-left Myinput Canhgiua" >
                                    <input type="text" id="InputData" value="sfsfsdfasdf" readonly></input>
                                </div>
                                <div className="col-md-2 col-3 float-left MyCoppy Canhgiua"> 
                                    <Icon src="icon/copy.svg" style={{"margin-top":"-15%"}} onClick={handleCopy}></Icon>    
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-12 Canhgiua mt-3 mb-5">
                            <Icon
                                src="icon/fb.svg"
                                onClick={()=> window.open("#")}
                                />
                                 <Icon
                                src="icon/tw.svg"
                                onClick={()=> window.open("#")}
                                />
                                 <Icon
                                src="icon/tele.svg"
                                onClick={()=> window.open("#")}
                                />
                        </div>
                   
                    </div>
                </div>
                <div className="col-md-6 col-12 float-left mt-3">
                    <StyledTitle className="Canhgiua pt-3">Nâng cấp lên học viên</StyledTitle>
                    <StyledTitle className="Canhgiua" style={{"font-size":"14px"}}>để được hưởng nhiều ưu đãi từ <b style={{"padding-left":"3px"}}> LIVETRADE</b></StyledTitle>
                    <div className="row justify-content-md-center">
                        <div className="col-md-5 col-12 mt-5 vienvang">
                            <div className="col-md-12 col-12 pt-3 pb-3 Canhgiua">
                                <Img src="images/level/hv.png"></Img>
                            </div>
                            <StyledTitle className="Canhgiua" color="secondary">Học viên</StyledTitle>
                            <StyledText className="Canhgiua mt-2" style={{"font-size":"24px"}}>Giao dịch:</StyledText>
                            
                            <StyledText className="Canhgiua mt-2" style={{"font-size":"24px"}}>
                                <b>2500$ &nbsp;</b>
                                KUSD/tháng
                            </StyledText>
                            <hr className="Gachngang"></hr>
                            <StyledText className="Canhgiua mt-2" style={{"font-size":"24px"}}>Tổng tài sản:</StyledText>
                            <StyledText className="Canhgiua mt-2" style={{"font-size":"24px"}}> <b>{"< 2500$"}</b></StyledText>
                            <div className="col-md-12 col-12 Canhgiua pb-4">
                                <Button mt="20px" width="80%" onClick={"#"}>Nâng cấp</Button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Medal;