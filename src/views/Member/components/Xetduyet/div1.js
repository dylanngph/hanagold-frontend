import styled from 'styled-components';
import CardLogo from 'components/Card/CardLogo';
import Text from 'components/Text/Text';
const Container1 = styled.div`
  height:35%;
  width:100%;
  padding-top:12.5%;
  padding-bottom:5%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color:#fdb533;
`
const Mydiv=styled.div`
    width:100%;
    height:40%;
    display: flex;
    align-items: center;
    justify-content: center;
   
`;
const Myimg = styled.img`
  height:35%;
`;
const Logo = styled.img`
  width:50%;
`;
const Container2 = styled.div`
  height: 50%;
  width:100%;
  padding-top:8%;
  border-left:1px solid #40426f;
  border-right:1px solid #40426f;
`;
const Container3 = styled.div`
  height: 20%;
  width:100%;
  border-left:1px solid #40426f;
  border-right:1px solid #40426f;
  border-bottom:1px solid #40426f;
  padding-top:1%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;
const Btn = styled.div`
  flex: 1;
  background: ${({ theme}) => theme.colors.secondary};
  border-radius: 50px;
  padding: 8px;
  position: relative;
  text-align: center;
  margin: 0 30px;
  color: ${ ({theme}) => theme.colors.primary };
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
  a{
    justify-content: center;
    color: ${ ({theme}) => theme.colors.primary };
    font-size: 16px;
    &:hover{
      text-decoration: none;
    }
  }
`
const data=[
  {
    title:"Cộng tác viên",
    user:"10 User",
    phi:"100",
    logo:"images/image3.png"
  },
  {
    title:"Cao cấp",
    user:"5 cộng tác viên",
    phi:"200",
    logo:"images/image4.png"
  },
  {
    title:"Khu vực",
    user:"5 đối tác cao cấp",
    phi:"500",
    logo:"images/image5.png"
  },
  {
    title:"Country",
    user:"5 đối tác khu vực",
    phi:"1000",
    logo:"images/image6.png"
  },
]

function Div1(){
    return(
      data.map((item,key)=>(
        <div key={key} className="col-md-3 col-12 cus_res mt-3" style={{height:"400px","padding-left":"1%","padding-right":"1%"}}>
        <Container1>
          <Mydiv>
            <Logo src={item.logo}></Logo>
          </Mydiv>
          <Mydiv>
             <Text fontSize="22px" bold className="pt-5"  color="primary"  verticalAligh="top">{item.title}</Text>
          </Mydiv>
          
        </Container1>
        <Container2>

          <Mydiv>
            <Myimg src="icon/Check.svg"></Myimg>
            <Text fontSize="18px" className="pl-3">{item.user}</Text>
          </Mydiv>

          <Mydiv>
            <Myimg src="icon/fe_money.svg"></Myimg>
            <Text fontSize="22px" color="secondary"> Phí nâng cấp {item.phi} LTD</Text>
          </Mydiv>
        </Container2>
        <Container3 className="customtriangles">
            <Btn>
               <Text fontSize="16px" style={{fontWeight:"600",color:"#191919"}}> Nâng cấp</Text>
            </Btn>
        </Container3>
    </div>
      ))
        
    );
    
}

export default Div1;
