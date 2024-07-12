import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Users() {
// useState
  const [users, setUsers] = useState([]);
  const [runUseEffect, setRun] = useState(0);

// useEffect
  useEffect(() => {
    axios.get("http://localhost:3000/web/users", )
    .then((data) => setUsers(data.data.users))
    .catch((err) => console.log(err));
  }, [runUseEffect])
  
// Mapping
  const showUsers = users.map((user, index) =>
    <tr key = {index}>
      <td>{index + 1}</td>
      <td>{user.username}</td>
      <td>1,500</td>
      <td><Link to = {`${user.id}`}><i className = "fa-solid fa-eye table-icon"></i></Link></td>
      <td><i onClick = {() => deleteUser(user.id)} className = "fa-regular fa-trash-can table-icon"></i></td>
    </tr>
)

async function deleteUser (id) {
  try{
    let res = await axios.delete(`http://localhost:3000/web/delete_user/${id}`,);
    if(res.status === 200)
    setRun((prev) => prev + 1);
  }
  catch {
    console.log("There Is An Error In Delete");
  }
}

  return(
    <>
      <div className = "nav-item-content">
        <div className = "d-flex">
        <h1 className = "special-head">Users</h1>
          <div className = "d-flex align-c ml-50">
            <label htmlFor="search">
              <i className="search-icon fa-solid fa-magnifying-glass" ></i>
            </label>
            <input
              id = "search"
              className = "special-search"
              placeholder = "Search"
            />
          </div>
        </div>
        <table className = "special-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Balance</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {showUsers}
          </tbody>
        </table>
        <NavLink className = "floating-button" to = "/home/adduser">
          +
        </NavLink>
      </div>
    </>
  );
}