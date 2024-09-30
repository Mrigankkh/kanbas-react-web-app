import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1235/Home"
              >
                <img src="/images/nodejs.png" width="100%" height={160} />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1235 Node JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Backend development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              {" "}
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1236/Home"
              >
                <img src="/images/python.jpeg" width="100%" height={160} />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1236 Python
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Data Science
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              {" "}
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1237/Home"
              >
                <img src="/images/java.png" width="100%" height={160} />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1237 Java
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Object-Oriented Programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              {" "}
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1238/Home"
              >
                <img src="/images/csharp.jpeg" width="100%" height={160} />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1238 C#
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Game Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              {" "}
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1239/Home"
              >
                <img src="/images/ruby.jpeg" width="100%" height={160} />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1239 Ruby
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Web Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              {" "}
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1240/Home"
              >
                <img src="/images/go.png" width="100%" height={160} />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1240 Go
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Concurrent Programming
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
            <div className="card rounded-3 overflow-hidden">
              {" "}
              <Link
                className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1241/Home"
              >
                <img src="/images/kotlin.png" width="100%" height={160} />
                <hr />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1241 Kotlin
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Android Development
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
