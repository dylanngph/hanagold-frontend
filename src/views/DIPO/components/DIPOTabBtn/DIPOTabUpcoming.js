import Text from 'components/Text/Text';
import 'styles/index.css';
function DIPOTabUpcoming(){
    const data=[
        {
            title:"Total Funds Raised",
            content:"TBA"
        },
        {
            title:"Projects Launched",
            content:"2"
        },
        {
            title:"All-time Unique Participants",
            content:"130"
        }
    ];
    return(
        <div className="container mt-5">
         <div className="row justify-content-center">
             {data.map((item,key)=>{
                 return(
                <div className="col-md-4 col-4 mt-3" key={key}>
                    <Text fontSize="20px" bold className="text-center Size18">{item.title}</Text>
                    <Text fontSize="26px" className="mt-3 Canhgiua" bold>{item.content}</Text>
                </div>
                 );
             })}      
         </div>
        </div>
    );
}
export default DIPOTabUpcoming;