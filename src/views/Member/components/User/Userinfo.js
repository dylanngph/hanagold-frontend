
import styled from 'styled-components';
import Text from 'components/Text/Text';
//import CardStats from 'views/Home/components/Stats/CardStats';
const StyIcon={
    "float":"right",
    "width":"22px",
}
const canhgiua={
    "display": "flex",
    "align-items": "center",
    "justify-content": "center",
}
const Avt=styled.img`
    width: 100px;
    clip-path: circle(50px at center);
    object-fit: cover;
`
const Icon = styled.img`
  margin-right:5px;
  cursor: pointer;
  width:30px;
  padding-top:10px;
`
const Nopadding={"padding-top":"2%","padding-left":"0px","padding-right":"0px"}

const Social=[
    {
        label: "Facebook",
        icon: "icon/fb.svg",
        href: "#",
    },
    {
        label: "Telegram",
        icon: "icon/tele.svg",
        href: "#",
    },
    {
        label: "Twitter",
        icon: "icon/tw.svg",
        href: "#",
    }
];
const TTLienlac=[
    {
        thongtin:"demotest@gmail.com",
        icon:"icon/mail.svg"
    },
    {
        thongtin:"Số 12, đường A4, KDC Hưng Phú, phường Hưng Phú, Quận Cái Răng, tp Cần Thơ",
        icon:"icon/map.svg"
    },
    {
        thongtin:"123456789",
        icon:"icon/phone.svg"
    }
];
function Userinfor (){
    return(
     <div className="row MyContainer">
         <div className="col-md-4 col-12 float-left" >
             <div className="row">
                <div className="col-md-6 col-5 float-left" style={canhgiua} >
                    <Avt className="Cus-img" src="images/johndoe.jpg"></Avt>
                </div>
                <div className="col-md-5 col-5 float-left" style={Nopadding}>
                   <Text color="secondary" fontSize="24px">Jonh Doe</Text>
                    {Social.map((item,key)=>{
                        return(
                            <Icon key={key}
                            src={item.icon}
                            onClick={()=> window.open(item.href, '_blank')}></Icon>
                        );
                    })}
                </div>
               <div className="col-2 HideDesktop">
                    <Icon
                            style={StyIcon}
                            src="icon/change.svg"
                            onClick={()=> window.open("#")}
                            />
               </div>
             </div>
            
         </div>
         <div className="col-md-8 col-12 float-left" >
             <div className="col-md-2 col-2 float-right HideMobile ">
                    <Icon
                            style={StyIcon}
                            src="icon/change.svg"
                            onClick={()=> window.open("#")}
                        />
                </div>
             <div className="row Cus-padding">
                 
                 {TTLienlac.map((item,key)=>{
                     return(
                        <div className="col-md-10 col-12" key={key}>
                        <div className="col-md-2 col-2 float-left" >
                            <Icon src={item.icon}></Icon>
                        </div>
                        <div className="col-md-10 col-10 float-left" style={{"margin-left":"-10px","padding-top":"2.5%"}}>
                           <Text fontSize="16px">{item.thongtin}</Text>
                        </div>
                     </div>
                     );
                 })}
                 
             </div>
            
             
       
        </div>
                 
     </div>
    );
   
   
}

export default Userinfor;