import { useContext } from "react";
import { User } from "../Context";

export default function Dashboard() {

  const userInfo = useContext(User);

  // console.log(userInfo);

  return(
    <>
      <div className = "overview">
        <div className = "overview-first-box">
          <div className = "overview-content-1">
            <h4 className = "mb-20">Total Users</h4>
            <div className = "overview-box-content">
              <h2>5,160</h2>
              <i className = "fa-solid fa-users"></i>
            </div>
          </div>
          <div className = "overview-content-2">
            <h4 className = "mb-20">Total Bookings</h4>
            <div className = "overview-box-content">
              <h2>6,500</h2>
              <i className = "fa-solid fa-money-check"></i>
            </div>
          </div>
          <div className = "overview-content-3">
          <h4 className = "mb-20">Today's New Users</h4>
          <div className = "overview-box-content">
            <h2>10</h2>
            <i className = "fa-solid fa-user-plus"></i>
          </div>
          </div>
          <div className = "overview-content-4">
            <h4 className = "mb-20">Today's New Bookings</h4>
            <div className = "overview-box-content">
              <h2>20</h2>
              <i className = "fa-solid fa-money-check"></i>
            </div>
          </div>
        </div>
        <div className = "overview-second-box mt-25">
          <div className = "overview-content-5">5</div>
          <div className = "overview-content-6">6</div>
        </div>
        <div className = "overview-third-box mt-25">
        <div className = "overview-content-7">
          <h2 className = "mb-30">Top Trips</h2>
          <table className = "top-trips-table">
            <thead>
              <tr>
                <th className = "fw-300">#</th>
                <th className = "fw-300">Name</th>
                <th className = "fw-300">Reviews</th>
                <th className = "fw-300">Bookings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className = "fw-300">1</td>
                <td className = "fw-300"><p>Disney Princess Russia Test Test Test</p></td>
                <td>
                  <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                  </div>
                </td>
                <td className = "fw-300"><span>1375</span></td>
              </tr>
              <tr>
                <td className = "fw-300">2</td>
                <td className = "fw-300"><p>Disney Princess Russia</p></td>
                <td>
                <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                  </div>
                </td>
                <td className = "fw-300"><span>1102</span></td>
              </tr>
              <tr>
                <td className = "fw-300">3</td>
                <td className = "fw-300"><p>Apple Smartwatches</p></td>
                <td>
                  <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                  </div>
                </td>
                <td className = "fw-300"><span>981</span></td>
              </tr>
              <tr>
                <td className = "fw-300">4</td>
                <td className = "fw-300"><p>Disney Princess Russia</p></td>
                <td>
                  <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star-half"></i>
                  </div>
                </td>
                <td className = "fw-300"><span>623</span></td>
              </tr>
              <tr>
                <td className = "fw-300">5</td>
                <td className = "fw-300"><p>Disney Princess</p></td>
                <td>
                  <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                  </div>
                </td>
                <td className = "fw-300"><span>450</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className = "overview-content-8">
          <h2 className = "mb-30">Top Destinations</h2>
          <table className = "top-trips-table">
            <thead>
              <tr>
                <th className = "fw-300">#</th>
                <th className = "fw-300">Name</th>
                <th className = "fw-300">Reviews</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className = "fw-300">1</td>
                <td className = "fw-300"><p>Disney Princess Russia Test Test Test</p></td>
                <td className = "fw-300">
                  <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td className = "fw-300">2</td>
                <td className = "fw-300"><p>Disney Princess Russia</p></td>
                <td className = "fw-300">
                <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td className = "fw-300">3</td>
                <td className = "fw-300"><p>Apple Smartwatches</p></td>
                <td>
                  <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td className = "fw-300">4</td>
                <td className = "fw-300"><p>Disney Princess Russia</p></td>
                <td>
                  <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star-half"></i>
                  </div>
                </td>
              </tr>
              <tr>
                <td className = "fw-300">5</td>
                <td className = "fw-300"><p>Disney Princess</p></td>
                <td>
                  <div>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                    <i className = "fa-solid fa-star"></i>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  );
}