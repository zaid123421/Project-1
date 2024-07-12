import {Route, Routes} from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Dashboard/Home";
import Users from "./Pages/User/AllUsers";
import Admins from "./Pages/Admin/Admins";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Trips from "./Pages/Trips/Trips";
import Destinations from "./Pages/Destinations/Destinations";
import AdminDetails from "./Pages/Admin/AdminDetails";
import AddAdmin from "./Pages/Admin/AddAdmin";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import SuperAdminCode from "./Pages/Auth/SuperAdminCode";
import VerifyCode from "./Pages/Auth/VerifyCode";
import SetNewPassword from "./Pages/Auth/SetNewPassword";
import AddUser from "./Pages/User/AddUser";
import UserDetails from "./Pages/User/UserDetails";
import Transactions from "./Pages/Transactions/Transactions";
import Attractions from "./Pages/Attractions/Attractions";
import Reservations from "./Pages/Reservations/Reservations";
import Deposit from "./Pages/Transactions/deposit";
import AddTrip from "./Pages/Trips/AddTrip";
import AddDestination from "./Pages/Destinations/adddestination";
import RequireAuth from "./Pages/Auth/RequireAuth";
import PresistLogin from "./Pages/Auth/PresistLogin";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "/forgotpassword" element = {<ForgotPassword />} />
        <Route path = "/superadmincode" element = {<SuperAdminCode />} />
        <Route path = "/verifycode" element = {<VerifyCode />} />
        <Route path = "/setnewpassword" element = {<SetNewPassword />} />
        {/* Protected Routes */}
        <Route element = {<PresistLogin />}>
          <Route element = {<RequireAuth />}>
            <Route path = "/home" element = {<Home />} >
              <Route exact path = "dashboard" element = {<Dashboard />} />
              <Route path = "admins" element = {<Admins />} />
              <Route path = "addadmin" element = {<AddAdmin />} />
              <Route path = "admins/:id" element = {<AdminDetails />} />
              <Route path = "users" element = {<Users />} />
              <Route path = "adduser" element = {<AddUser />} />
              <Route path = "users/:id" element = {<UserDetails />} />
              <Route path = "trips" element = {<Trips />} />
              <Route path = "addtrip" element = {<AddTrip />} />
              <Route path = "attractions" element = {<Attractions />} />
              <Route path = "destinations" element = {<Destinations />} />
              <Route path = "adddestination" element = {<AddDestination />} />
              <Route path = "reservations" element = {<Reservations />} />
              <Route path = "transactions" element = {<Transactions />} />
              <Route path = "deposit" element = {<Deposit />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
