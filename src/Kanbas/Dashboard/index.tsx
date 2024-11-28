import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddCourse from "./addCourse";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const userCourses = courses;

  return (
    <div id="w-full wd-dashboard">
      <h1 id="w-full wd-dashboard-title" className="float-start ">
        Dashboard
      </h1>{" "}
      <button
        onClick={() => setEnrolling(!enrolling)}
        className="float float-end btn btn-primary"
      >
        {enrolling ? "My Courses" : "All Courses"}
      </button>
      <br />
      <br />
      <hr />
      {currentUser.role == "FACULTY" ? (
        <AddCourse
          addNewCourse={addNewCourse}
          updateCourse={updateCourse}
          course={course}
          setCourse={setCourse}
          courses={courses}
        />
      ) : (
        <></>
      )}
      <hr />
      <hr />
      <h2 id="wd-dashboard-published" className="float-start">
        Published Courses ({userCourses.length})
      </h2>{" "}
      <br />
      <br />
      <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {userCourses.map((course) => (
            <div className="wd-dashboard-course col" style={{ width: "350px" }}>
              <div className="card rounded-3 overflow-hidden">
                <div
                  //   to={`/Kanbas/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <div className="pt-5 px-2">
                    <img
                      src={course?.imageurl}
                      width="auto"
                      style={{ maxWidth: "100%" }}
                      height={160}
                    />
                  </div>

                  <hr />

                  <div className="card-body py-0">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course?.name}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course?.description}
                    </p>

                    <div className="d-flex justify-content-between align-items-center gap-2">
                      <Link
                        to={`/Kanbas/Courses/${course?._id}/Home`}
                        className="btn btn-primary"
                      >
                        Go
                      </Link>

                      {enrolling && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${
                            course.enrolled ? "btn-danger" : "btn-success"
                          }`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}

                      {currentUser.role === "FACULTY" && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>

                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </div>

                    <br />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
