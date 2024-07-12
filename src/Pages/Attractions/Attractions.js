import { NavLink } from "react-router-dom";

export default function Attractions(){
  return(
    <>
      <div className = "trips-container attractions-container">
        <div style = {{backgroundImage: {}}}>
          <div className = "head">
            <i className = "fa-regular fa-trash-can trip-trash fs-14"></i>
            <div>
              <i className = "fa-solid fa-star fs-14 mr-5"></i>
              <span className = "fw-600 fs-14">5</span>
            </div>
          </div>
          <div className = 'card-info'>
            <h3 className = 'fw-600'>Santiago Bernabeu</h3>
          </div>
        </div>
        <NavLink className = "floating-button" to = "/home/addattraction">
          +
        </NavLink>
      </div>
    </>
  );
}