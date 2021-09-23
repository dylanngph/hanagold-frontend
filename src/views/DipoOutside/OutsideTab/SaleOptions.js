import 'styles/index.css';
import Text from "components/Text/Text";
import Button from "components/Button/Button";
const table=[
    {row:"Sale dates (UTC)",Option1:"00 July 20 - - 00:00 PM",Option2:"00 July 20 - -00:00 PM",Option3:"00 July 20 - -00:00 PM"},
    {row:"Lockup & release",Option1:"Freely tradeable",Option2:"Locked 6 months, claim 6 times from month 7 - 12",Option3:"Locked 12 months, claim 12 times from month 13 - 24"},
    {row:"Purchase limits",Option1:"$000 - $000",Option2:"$000 - $000",Option3:"$000 - $000"},
    {row:"% of the Total supply (on Kai)",Option1:"0",Option2:"0",Option3:"0"},
    {row:"Number of Tokens",Option1:"0",Option2:"0",Option3:"0"},
    {row:"Price per Token",Option1:"0",Option2:"0",Option3:"0"},
    {row:"Price per Token",Option1:"0",Option2:"0",Option3:"0"},
    {row:"Price per Token",Option1:"0",Option2:"0",Option3:"0"},
    {row:"Max Slots",Option1:"0",Option2:"0",Option3:"0"}
]
const InforBy=[
    {title:"Option 1",data1:"Starts July 27",data2:"$0.00 per token",data3:"Freely tradeable",data4:"Require 0.000 DRAGON",},
    {title:"Option 1",data1:"Starts July 28",data2:"$0.000 per token",data3:"Locked 6 months, claim 6 times from month 7 - 12",data4:"Require 00.000 DRAGON",},
    {title:"Option 1",data1:"Starts July 29",data2:"$0.00 per token",data3:"Locked 12 months, claim 12 times from month 13 - 24",data4:"Require 00.000 DRAGON",}
];

function SaleOptions() {
    return(
        <div className="col-md-12 col-12 mt-4 pl-1 pr-1">
            <div className="fullwidth pt-2 vien pt-4 pb-4">
                <Text fontSize="24px" className="Canhgiua">Token information</Text>
                <hr className="strikethrough"></hr>
                <div className="row mt-3">
                <div className="col-md-3 col-6 float-left mt-3">
                    <Text fontSize="18px" className="Canhgiua">Name</Text>
                    <Text fontSize="20px" bold className="Canhgiua" color="secondary">LPD Invest</Text>
                </div>
                <div className="col-md-3 col-6 float-left mt-3">
                    <Text fontSize="18px" className="Canhgiua">Token Symbol</Text>
                    <Text fontSize="20px" bold className="Canhgiua" color="secondary">LPDI</Text>
                </div>
                <div className="col-md-3 col-6 float-left mt-3">
                    <Text fontSize="18px" className="Canhgiua">Total Supply</Text>
                    <Text fontSize="20px" bold className="Canhgiua" color="secondary">000,000,000</Text>
                </div>
                <div className="col-md-3 col-6 float-left mt-3">
                    <Text fontSize="18px" className="Canhgiua">Total Supply on Kai</Text>
                    <Text fontSize="20px" bold className="Canhgiua" color="secondary">000,000,000</Text>
                </div>
            </div>
            </div>
            <div className="col-md-12 col-12 mt-3 pl-0 pr-0">
                <div className="tablepc vien">
                    <table class="table table-borderless mt-3 mt-3 " >
                        <thead>
                            <tr className="pt-4 pb-4">
                                <th scope="col"></th>
                                <th scope="col"><Text fontSize="24px" bold color="secondary">Options 1</Text></th>
                                <th scope="col"><Text fontSize="24px" bold color="secondary">Options 2</Text></th>
                                <th scope="col"><Text fontSize="24px" bold color="secondary">Options 3</Text></th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((item,key)=>{
                                return(
                                    <tr  className="pt-4 pb-4" key={key} style={{"border-top":"1px solid #3f426e"}}>
                                        <th scope="row"><Text fontSize="16px" className="StyTable pl-3">{item.row}</Text></th>
                                        <td><Text fontSize="16px" className="StyTable">{item.Option1}</Text></td>
                                        <td><Text fontSize="16px" className="StyTable">{item.Option2}</Text></td>
                                        <td><Text fontSize="16px" className="StyTable">{item.Option3}</Text></td>
                                    </tr>
                                );
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="tablemobile">
                    <table class="table table-borderless vien mt-4">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"><Text fontSize="20px" bold color="secondary">Options 1</Text></th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((item,key)=>{
                                return(
                                    <tr key={key} style={{"border-top":"1px solid #3f426e"}}>
                                        <th scope="row"><Text fontSize="16px" className="StyTable pl-3">{item.row}</Text></th>
                                        <td><Text fontSize="16px" className="StyTable">{item.Option1}</Text></td>
                                    </tr>
                                );
                            })}
                           
                        </tbody>
                    </table>
                    <table class="table table-borderless vien mt-4">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"><Text fontSize="20px" bold color="secondary">Options 2</Text></th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((item,key)=>{
                                return(
                                    <tr key={key} style={{"border-top":"1px solid #3f426e"}}>
                                        <th scope="row"><Text fontSize="16px" className="StyTable pl-3">{item.row}</Text></th>
                                        <td><Text fontSize="16px" className="StyTable">{item.Option2}</Text></td>
                                    </tr>
                                );
                            })}
                           
                        </tbody>
                    </table>
                    <table class="table table-borderless vien mt-4">
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col"><Text fontSize="20px" bold color="secondary">Options 3</Text></th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.map((item,key)=>{
                                return(
                                    <tr key={key} style={{"border-top":"1px solid #3f426e"}}>
                                        <th scope="row"><Text fontSize="16px" className="StyTable pl-3">{item.row}</Text></th>
                                        <td><Text fontSize="16px" className="StyTable">{item.Option3}</Text></td>
                                    </tr>
                                );
                            })}
                           
                        </tbody>
                    </table>

                </div>
            <div className="row mt-3 text-center">
               
                    {InforBy.map((item,key)=>{
                        return(
                        <div className="col-md-4 col-12 pl-3 pr-3 float-left mt-4"> 
                            <div className="fullwidth vien pt-3 pb-5 pl-5 pr-5 " key={key}>
                                <Text fontSize="24px" color="secondary" bold>{item.title}</Text>
                                <Text fontSize="16px" className="mt-3">{item.data1}</Text>
                                <Text fontSize="16px" className="mt-3">{item.data2}</Text>
                                <Text fontSize="16px" className="mt-3">{item.data3}</Text>
                                <Text fontSize="16px" className="mt-3">{item.data4}</Text>
                                <div className="col-md-12 col-12 mt-3">
                                    <Button className="mt-3" style={{"width":"60%"}}>Buy</Button>
                                </div>
                                
                            </div>
                        </div>
                        );
                    })}
                   
                
            </div>
        </div>
    );

}
export default SaleOptions;