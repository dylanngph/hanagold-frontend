
import Container from 'components/Layout/Container';
import styled from 'styled-components';
import 'styles/index.css';
import CardStats, { StyledText, StyledTitle, StyledValue } from 'views/Home/components/Stats/CardStats';
const Myborder = {
    "height": "450px",
    "width":"100%",
    "border":"1px solid #fdb533",
    "border-radius":"20px",
}
const canhgiua={
    "display":"flex",
    "align-items": "center",
    "justify-content": "center",
}
const Img = styled.img`
    padding-top:5%;
    height:80%;
    cursor: pointer;
`
const Txt = styled.span`
    color:#fff;
    font-size: 22px;
`
const Price = styled.span`
    font-weight: 600;
    color:#fff;
    font-size: 24px;
`
const Dvt = styled.span`
    color:#fff;
    font-size: 16px;
    padding-left:6%;
`
const Container1 = styled.div`
  height: 25%;
 width:100%;
 
`
const Container2 = styled.div`
    height: 10%;
     width:100%; 
`

const Container3 = styled.div`
    height: 13%;
   width:100%;
`
const Container4 = styled.div`
    height: 15%;
    width:100%;
    margin-top:5%;
`
const Taghr = styled.hr`
    width:80%;
    border-top:2px solid #fdb533;
    margin-top:0px;
    margin-bottom:0px;
`
const Btn = styled.div`
  flex: 1;
  background: ${({ theme}) => theme.colors.secondary};
  border-radius: 50px;
  padding: 10px;
  position: relative;
  text-align: center;
  margin: 0 10px;
  font-weight:600;
  font-size:16px;
  color: ${ ({theme}) => theme.colors.primary };
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
  a{
    justify-content: center;
    color: ${ ({theme}) => theme.colors.primary };
    font-size: 20px;
    &:hover{
      text-decoration: none;
    }
  }
`
const Data = [
    {
        level:"HỌC VIÊN",
        giaodich:"2500",
        taisan:"<2500",
        logo:"images/level/hv.png"
    },
    {
        level:"LEVEL 1",
        giaodich:"2500",
        taisan:">2500",
        logo:"images/level/level1.png"
    },
    {
        level:"LEVEL 2",
        giaodich:"5000",
        taisan:"5000",
        logo:"images/level/level2.png"
    },
    {
        level:"LEVEL 3",
        giaodich:"10K",
        taisan:"10K",
        logo:"images/level/level3.png"
    },
    {
        level:"LEVEL 4",
        giaodich:"10K",
        taisan:"10K",
        logo:"images/level/level4.png"
    },
    {
        level:"LEVEL 5",
        giaodich:"50K",
        taisan:"<50K",
        logo:"images/level/level5.png"
    },
    {
        level:"LEVEL 6",
        giaodich:"100K",
        taisan:">100K",
        logo:"images/level/level6.png"
    },
    {
        level:"LEVEL 7",
        giaodich:"250K",
        taisan:"250K",
        logo:"images/level/level7.png"
    },
    {
        level:"LEVEL 8",
        giaodich:"500K",
        taisan:"500K",
        logo:"images/level/level8.png"
    },
    {
        level:"LEVEL 9",
        giaodich:"1M",
        taisan:"1M",
        logo:"images/level/level9.png"
    }
];
function Listhuyhieu(){
    return( 
    Data.map((item,key)=>(
             <div className="pc-2">
                <div key={key} style={Myborder}>
                    <Container1 style={canhgiua}>
                        <Img src={item.logo}></Img>
                    </Container1>
                    <StyledTitle style={canhgiua} color="secondary">{item.level}</StyledTitle>
                    <Container2 style={canhgiua}>
                        <Txt>Giao dịch: </Txt>
                    </Container2>
                    <Container3 style={canhgiua}>
                        <Price>{item.giaodich}$</Price><Dvt>KUSD/tháng</Dvt>
                    </Container3>
                    <Taghr></Taghr>
                    <Container2 style={canhgiua}>
                        <Txt style={{"padding-top":"8%"}}>Tổng tài sản: </Txt>
                    </Container2>
                    <br></br>
                    <Price style={canhgiua} >{item.taisan}$</Price>
                    <Container4 style={canhgiua}>
                            <Btn>Nâng cấp</Btn>
                    </Container4>
                </div>
             </div>
    ))
        
    );
    
}

export default Listhuyhieu;
