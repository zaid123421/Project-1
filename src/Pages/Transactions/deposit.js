import { NavLink } from "react-router-dom";

export default function Deposit() {
  return(
    <>
      <div className = "nav-item-content">
        <div className = "d-flex align-c">
        <NavLink to = "/home/transactions">
          <i className="fa-solid fa-angle-left arrow-left"></i>
        </NavLink>
          <h1 className = "special-head ml-15 mr-25">Deposit Requests</h1>
        </div>
        <table className = "special-table transaction-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Deposit Amount</th>
              <th>Receipt</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Zaid</td>
              <td>#025487</td>
              <td>#025487</td>
              <td>23/7/2002</td>
              <td className = "only-this">
                <div className = "d-flex">
                  <span>Accept</span>
                  <span>Refuse</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </>
  );
}