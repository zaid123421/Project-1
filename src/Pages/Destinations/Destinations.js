import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Destinations(){

  const [z, setZ] = useState();

  useEffect(() => {
    axios.get("http://localhost:3000/web/destenations")
    .then(data => {
      // console.log(data.data.data[0].images[0])
      const image = data.data.data[1].images[0];
      console.log(image);
      const blob = new Blob([image], {type: "image/jpg"})
      console.log(blob);
      const objectURL = URL.createObjectURL(blob);
      setZ(objectURL);
    })
    .catch(err => console.log(err));
  },[])

return(
  <>
  <img src = {z} alt = "1"></img>
      <div className = "trips-container attractions-container">
        <div style = {{backgroundImage: {}}}>
          <div className = "head">
            <i className = "fa-regular fa-trash-can trip-trash fs-14"></i>
            <div className = "fs-14">
              <i className = "fa-solid fa-star mr-5"></i>
              <span className = "fw-600">5</span>
            </div>
          </div>
          <div className = 'card-info'>
            <h3 className = 'fw-600 text-c'>Madrid</h3>
          </div>
        </div>
        <NavLink className = "floating-button" to = "/home/adddestination">
          +
        </NavLink>
      </div>
    </>
  );
}