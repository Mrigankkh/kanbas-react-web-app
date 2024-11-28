import { Link,useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../styles.css";
export default function CoursesNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { cid } = useParams();
  console.log('In CoursesNavigation course id is', cid);
  const {pathname} = useLocation();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5rounded-0">
      {links.map((link, index) => (
        <Link
          key={index}
          id={`wd-course-${link.toLowerCase()}-link`}
          className={`list-group-item border border-0 ${pathname.includes(link) ? 'active' : 'text-danger '}`}
          to={`/Kanbas/Courses/${cid}/${link}`}
        >
          {link}
        </Link>
      ))}
      
    </div>
  );
}
