import { Link } from "react-router-dom";
import "../styles.css";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

export default function AccountNavigation() {
  const location = useLocation();

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (location.pathname.includes(path));
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          id="wd-course-home-link"
          className={`list-group-item ${active(link)?"active ":"text-danger"} border border-0 `}
          to={`/Kanbas/Account/${link}`}
        >
          {link}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item  border border-0 ${active("Users")?"active ":"text-danger"}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}
    </div>
  );
}
