import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Admins() {
  const [admins, setAdmins] = useState([]);
  const [runUseEffect, setRun] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/web/admins", )
    .then((data) => setAdmins(data.data.admins))
    .catch((err) => console.log(err));
  }, [runUseEffect])

  const showAdmins = admins.map((admin, index) =>
    <tr key = {index}>
      <td>{index + 1}</td>
      <td>{admin.username}</td>
      <td>{admin.role}</td>
      <td><Link to = {`${admin.id}`}><i className = "fa-solid fa-eye table-icon"></i></Link></td>
      <td><i onClick = {() => deleteUser(admin.id)} className = "fa-regular fa-trash-can table-icon"></i></td>
    </tr>
)

async function deleteUser (id) {
  try{
    let res = await axios.delete(`http://localhost:3000/web/delete_admin/${id}`,);
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
        <h1 className = "special-head">Admins</h1>
        <table className = "special-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Role</th>
              <th>Details</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {showAdmins}
          </tbody>
        </table>
          <NavLink className = "floating-button" to = "/home/addadmin">
            +
          </NavLink>
      </div>
    </>
  );
}