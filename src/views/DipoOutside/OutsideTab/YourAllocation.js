import 'styles/index.css';
import Text from "components/Text/Text";
import Button from "components/Button/Button";
const YourAllocation=[
    {data1:"Option 1",data2:"0.000",data3:"$0.00",data4:"00d-00h-00m-00s",data5:""},
    {data1:"Option 2",data2:"0.000",data3:"$0.00",data4:"00d-00h-00m-00s",data5:""},
    {data1:"Option 3",data2:"0.000",data3:"$0.00",data4:"00d-00h-00m-00s",data5:""}
];
function YourApplication() {
    return(
        <div className="col-md-12 col-12 mt-5 pt-3 pl-0 pr-0 vien">
            <div className="table-responsive-xl mb-4">
            <table class="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col"><Text fontSize="16px"style={{"width":"120px"}} className="pl-3">No.</Text></th>
                    <th scope="col"><Text fontSize="16px" style={{"width":"120px"}}>Require LTD</Text></th>
                    <th scope="col"><Text fontSize="16px" style={{"width":"120px"}}>Price per LPDI</Text></th>
                    <th scope="col"><Text fontSize="16px" style={{"width":"150px"}}>Open in</Text></th>
                    <th scope="col"><Text fontSize="16px">Staked</Text></th>
                    <th scope="col"><Text fontSize="16px" style={{"width":"200px"}}>Action</Text></th>
                    </tr>
                </thead>
                <tbody>
                    {YourAllocation.map((item,key)=>{
                        return(
                        <tr key={key} style={{"border-top":"1px solid #353547"}}>
                            <th scope="row"><Text fontSize="16px" className="pl-3">{item.data1}</Text></th>
                            <td><Text fontSize="16px">{item.data2}</Text></td>
                            <td><Text fontSize="16px">{item.data3}</Text></td>
                            <td><Text fontSize="16px">{item.data4}</Text></td>
                            <td><Text fontSize="16px">{item.data5}</Text></td>
                            <td><Button>Connect  Wallet</Button></td>
                        </tr>
                        );
                    })}
                    
                </tbody>
            </table>
            </div>
           
        </div>
    )
}
export default YourApplication;