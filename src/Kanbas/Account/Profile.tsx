import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{textAlign:"left", padding:'20px', width:'350px'}} >
      <h3>Profile</h3>
      <input id="wd-username" value="alice" placeholder="username" className="form-control" /><br/>
      <input id="wd-password" value="123" placeholder="password" className="form-control"
             type="password" /><br/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" className="form-control"/><br/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="form-control"/><br/>
      <input id="wd-dob" value="2000-01-01" type="date" className="form-control"/><br/>
      <input id="wd-email" value="alice@wonderland" type="email" className="form-control"/><br/>
      <select id="wd-role" className="form-control">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>

    
      <Link to="/Kanbas/Account/Signin" >  <button
        id="wd-add-module-btn"
        className="btn btn-md btn-danger me-1 w-100"
      >
        Signout
      </button></Link>
    </div>
);}
