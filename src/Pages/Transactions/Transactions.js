import { NavLink } from "react-router-dom";

export default function Transactions() {
  return(
    <>
      <div className = "nav-item-content">
        <div className = "d-flex align-c">
          <h1 className = "special-head mr-25">Transactions</h1>
          <NavLink className= "deposit" to = "/home/deposit">Deposit Requests</NavLink>
        </div>
        <table className = "special-table transaction-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Accountant</th>
              <th>Username</th>
              <th>Transaction ID</th>
              <th>Transaction Type</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Zaid</td>
              <td>Aya </td>
              <td>#025487</td>
              <td><span>Credit</span></td>
              <td><span>Credit</span></td>
              <td>11/11/2022</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Zaid</td>
              <td>Anas</td>
              <td>#025517</td>
              <td><span>Credit</span></td>
              <td><span>Credit</span></td>
              <td>8/7/2022</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Zaid</td>
              <td>Alaa</td>
              <td>#025879</td>
              <td><span>Credit</span></td>
              <td><span>Credit</span></td>
              <td>14/6/2022</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Huda</td>
              <td>Zaid</td>
              <td>#025148</td>
              <td><span>Credit</span></td>
              <td><span>Credit</span></td>
              <td>23/7/2023</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Ahmad</td>
              <td>Zaid</td>
              <td>#025639</td>
              <td><span>Credit</span></td>
              <td><span>Credit</span></td>
              <td>23/4/2022</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mohsen</td>
              <td>Zaid</td>
              <td>#025634</td>
              <td><span>Credit</span></td>
              <td><span>Credit</span></td>
              <td>23/7/2021</td>
            </tr>
          </tbody>
        </table>
      </div>
      </>
  );
}