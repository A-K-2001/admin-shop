import "./widgetLg.css";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js";
import { useState } from "react";
import { useEffect } from "react";

export default function WidgetLg() {


  
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("Orders");
        setOrders(res.data);
      } catch { }
    };
    getOrders();

  }, []);






  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {Orders.map(Order=>(

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
           
            <span className="widgetLgName">{Order.userId}</span>
          </td>
          <td className="widgetLgDate">{format(Order.createdAt)}</td>
          <td className="widgetLgAmount">${Order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={Order.status}/>
          </td>
        </tr>
        ))}
      </table>
    </div>
  );
}
