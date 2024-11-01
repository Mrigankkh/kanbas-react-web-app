import React from 'react';

const AddCourse = ({
    course,
    setCourse,
    addNewCourse,
    updateCourse,
  }: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    updateCourse: () => void;
  }) => {
    return (
        <div>
    <h5>
        New Course
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          {" "}
          Add{" "}
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
      <input
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        className="form-control mb-2"
      />
      <textarea
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        className="form-control"
      />        </div>
    );
};

export default AddCourse;