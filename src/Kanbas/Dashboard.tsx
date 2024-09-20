import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1235/Home">
            <img src="/images/nodejs.png" width={200} />
            <div>
              <h5>CS1235 Node JS</h5>
              <p className="wd-dashboard-course-title">Backend development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1236/Home">
            <img src="/images/python.jpeg" width={200} />
            <div>
              <h5>CS1236 Python</h5>
              <p className="wd-dashboard-course-title">Data Science</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1237/Home">
            <img src="/images/java.png" width={200} />
            <div>
              <h5>CS1237 Java</h5>
              <p className="wd-dashboard-course-title">Object-Oriented Programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1238/Home">
            <img src="/images/csharp.jpeg" width={200} />
            <div>
              <h5>CS1238 C#</h5>
              <p className="wd-dashboard-course-title">Game Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1239/Home">
            <img src="/images/ruby.jpeg" width={200} />
            <div>
              <h5>CS1239 Ruby</h5>
              <p className="wd-dashboard-course-title">Web Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1240/Home">
            <img src="/images/go.png" width={200} />
            <div>
              <h5>CS1240 Go</h5>
              <p className="wd-dashboard-course-title">Concurrent Programming</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1241/Home">
            <img src="/images/kotlin.png" width={200} />
            <div>
              <h5>CS1241 Kotlin</h5>
              <p className="wd-dashboard-course-title">Android Development</p>
              <button>Go</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
