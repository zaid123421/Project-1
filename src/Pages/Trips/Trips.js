import { NavLink } from "react-router-dom";

export default function Trips() {
  return(
    <>
      <div className = "trips-container">
        <div style = {{backgroundImage: {}}}>
          <div className = "head">
            <i className = "fa-regular fa-trash-can trip-trash fs-14"></i>
            <div className = "fs-14">
              <i className = "fa-solid fa-star mr-5"></i>
              <span className = "fw-600">5</span>
            </div>
          </div>
          <div className = 'card-info'>
            <h3 className = 'fw-600'>Santiago Bernabeu</h3>
            <div className = "mb-5">
              <span className = "how">10 / 30 reserved</span>
              <span className = "state">Avaliable</span>
            </div>
            <div className = "mb-5">
              <i className = "fa-solid fa-location-dot mr-10"></i>
              <span className = "fs-14">Spain</span>
            </div>
            <div className = "mb-5">
              <i className = "fa-regular fa-calendar-days mr-10"></i>
              <span className = "fs-14">8 - 9 / Oct</span>
            </div>
            <div>
              <i className = "fa-solid fa-clock mr-10"></i>
              <span className = "fs-14">1 day(s)</span>
            </div>
            <span className = "fs-14 price">From $1320</span>
          </div>
        </div>
        <div style = {{backgroundImage: `url("https://photo980x880.mnstatic.com/37f93c7924cb320de906a1f1b9f4e12a/la-gran-via-de-madrid-1072541.jpg")`}}>
            <div className = "head">
              <i className = "fa-regular fa-trash-can trip-trash"></i>
              <div className = "fs-14">
                <i className = "fa-solid fa-star mr-5"></i>
                <span className = "fw-600">4.8</span>
              </div>
            </div>
          <div className = 'card-info'>
            <h3 className = 'fw-600'>Madrid City</h3>
            <div className = "mb-5">
              <span className = "how">14 / 30 reserved</span>
              <span className = "state">Avaliable</span>
            </div>
            <div className = "mb-5">
              <i className = "fa-solid fa-location-dot mr-10"></i>
              <span className = "fs-14">Spain</span>
            </div>
            <div className = "mb-5">
              <i className = "fa-regular fa-calendar-days mr-10"></i>
              <span className = "fs-14">9 - 11 / Oct</span>
            </div>
            <div>
              <i className = "fa-solid fa-clock mr-10"></i>
              <span className = "fs-14">3 day(s)</span>
            </div>
            <span className = "fs-14 price">From $395</span>
          </div>
        </div>
        <NavLink className = "floating-button" to = "/home/addtrip">
          +
        </NavLink>
      </div>
    </>
  );
}