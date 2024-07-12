import axios from "axios";
import { useEffect, useState } from "react";

export default function Reservations(){
  
  const [reservations, setReservations] = useState([]);
  const [runUseEffect, setRun] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/web/users", )
    .then((data) => setReservations(data.data.users))
    .catch((err) => console.log(err));
  }, [runUseEffect])

  const showReservations = reservations.map((reservation, index) =>
    <tr key = {index}>
      <td>{index + 1}</td>
      <td>{reservation.id}</td>
      <td>{reservation.username}</td>
      <td>{reservation.tripname}</td>
      <td>{reservation.date}</td>
      <td><i onClick = {() => deleteReservation(reservation.id)} className = "fa-regular fa-trash-can table-icon"></i></td>
    </tr>
)

async function deleteReservation (id) {
  try{
    let res = await axios.delete(`http://localhost:3000/web/Reservations/${id}`,);
    if(res.status === 200)
    setRun((prev) => prev + 1);
  }
  catch {
    console.log("There Is An Error In Delete");
  }
}

  return(
    <div>
      <div className = "nav-item-content">
        <div className = "d-flex">
        <h1 className = "special-head">Reservations</h1>
          {/* <div className = "d-flex align-c ml-50">
            <label htmlFor="search">
              <i className="search-icon fa-solid fa-magnifying-glass" ></i>
            </label>
            <input
              id = "search"
              className = "special-search"
              placeholder = "Search"
            />
          </div> */}
        </div>
        <table className = "special-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Reservation ID</th>
              <th>Username</th>
              <th>Trip Name</th>
              <th>Reservation Date</th>
              <th>Delete Reservation</th>
            </tr>
          </thead>
          <tbody>
            {showReservations}
          </tbody>
        </table>
      </div>
    </div>
  );
}