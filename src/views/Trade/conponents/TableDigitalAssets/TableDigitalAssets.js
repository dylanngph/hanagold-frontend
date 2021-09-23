import { useState } from 'react';
import 'views/Trade/conponents/TableDigitalAssets/TableDigitalAssets.css';
import data from 'views/Trade/conponents/TableDigitalAssets/TableDigitalAssets-data.json';

const TableDigitalAssets = () => {
    const [dataSourse, setDataSourse] = useState(data);
    
    return (
        <table className="tbl">
            <thead className="tbl-head">
                <tr className="tbl-1">
                    <td className="tbl-2">Symbol</td>
                    <td className="tbl-3">ATH</td>
                    <td className="tbl-3">Low</td>
                    <td className="tbl-3">Max Pain</td>
                    <td className="tbl-3">Price Now</td>
                    <td className="tbl-3">24h chg%</td>
                </tr>
            </thead>
            <tbody className="tbl-body">
                {dataSourse.map((dataSourse) => (
                    <tr className="tbl-4">
                        <td className="tbl-2" key={dataSourse.id}><img src={dataSourse.icon1}/><img src={dataSourse.icon2}/> {dataSourse.name}</td>
                        <td className="tbl-3" key={dataSourse.id}>{dataSourse.ath}</td>
                        <td className="tbl-3" key={dataSourse.id}>{dataSourse.low}</td>
                        <td className="tbl-3" key={dataSourse.id}>{dataSourse.maxpain}</td>
                        <td className="tbl-3" key={dataSourse.id}>{dataSourse.pricenow}</td>
                        <td className="tbl-3" key={dataSourse.id}>{dataSourse.hchg}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TableDigitalAssets ;