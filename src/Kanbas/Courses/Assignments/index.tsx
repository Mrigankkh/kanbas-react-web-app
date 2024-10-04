import { BsGripVertical } from "react-icons/bs";
import "../../styles.css";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LiaWpforms } from "react-icons/lia";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Assignments() {
  return (
    <div
      id="wd-assignments"
      style={{
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingTop: "50px",
        textAlign: "left",
      }}
    >
      <div className="d-flex align-items-center mb-3">
        <input
          id="wd-search-assignment"
          style={{ maxWidth: "80%" }}
          className="form-control me-2"
          placeholder="Search..."
        />
        <button
          id="wd-add-module-btn"
          className="btn btn-md btn-outline-dark me-2 float-end"
        >
          + Group
        </button>
        <button id="wd-add-module-btn" className="btn btn-danger btn-md float-end">
          + Assignment
        </button>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            {" "}
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <div className="float-end">
              <button className="me-2 btn btn-outline-dark" style={{ borderRadius: '50px', color: 'grey' }}>40% of total</button>
              <span  className='m-2' style={{color:'grey'}}>+</span>
              
              <IoEllipsisVertical className=" fs-4" />
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div id="wd-bs-grid-system">
                <div className="row">
                  <div className="col-1">
                    <BsGripVertical className="me-2 fs-3" />
                  </div>
                  <div className="col-1">
                    <LiaWpforms className="me-2 fs-1 text-success  " />
                  </div>
                  <div className="col-6">
                    <div
                      style={{ fontWeight: "800" }}
                      className="row-10 text-bold"
                    >
                      {" "}
                      <h3><Link  to="A1" style={{color:'black'}}>A1</Link> </h3>
                    </div>
                    <div className="row-10 " style={{ maxWidth: "600px" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span style={{ fontWeight: "600" }} className="font-bold">
                        Not available until
                      </span>{" "}
                      May at 12:00 am |{" "}
                      <span
                        className="text-bold "
                        style={{ fontWeight: "600" }}
                      >
                        Due
                      </span>{" "}
                      May 13 AT 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="col">
                    <LessonControlButtons />
                  </div>
                </div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div id="wd-bs-grid-system">
                <div className="row">
                  <div className="col-1">
                    <BsGripVertical className="me-2 fs-3" />
                  </div>
                  <div className="col-1">
                    <LiaWpforms className="me-2 fs-1 text-success  " />
                  </div>
                  <div className="col-6">
                    <div
                      style={{ fontWeight: "800" }}
                      className="row-10 text-bold"
                    >
                      {" "}
                      <h3><Link  to="A2" style={{color:'black'}}>A2</Link> </h3>
                    </div>
                    <div className="row-10 " style={{ maxWidth: "600px" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span style={{ fontWeight: "600" }} className="font-bold">
                        Not available until
                      </span>{" "}
                      May at 12:00 am |{" "}
                      <span
                        className="text-bold "
                        style={{ fontWeight: "600" }}
                      >
                        Due
                      </span>{" "}
                      May 13 AT 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="col">
                    <LessonControlButtons />
                  </div>
                </div>
              </div>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div id="wd-bs-grid-system">
                <div className="row">
                  <div className="col-1">
                    <BsGripVertical className="me-2 fs-3" />
                  </div>
                  <div className="col-1">
                    <LiaWpforms className="me-2 fs-1 text-success  " />
                  </div>
                  <div className="col-6">
                    <div
                      style={{ fontWeight: "800" }}
                      className="row-10 text-bold"
                    >
                      {" "}
                      <h3><Link  to="A3" style={{color:'black'}}>A3</Link> </h3>
                    </div>
                    <div className="row-10 " style={{ maxWidth: "600px" }}>
                      <span className="text-danger">Multiple Modules</span> |{" "}
                      <span style={{ fontWeight: "600" }} className="font-bold">
                        Not available until
                      </span>{" "}
                      July at 12:00 am |{" "}
                      <span
                        className="text-bold "
                        style={{ fontWeight: "600" }}
                      >
                        Due
                      </span>{" "}
                      August 13 AT 11:59pm | 100 pts
                    </div>
                  </div>
                  <div className="col">
                    <LessonControlButtons />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
