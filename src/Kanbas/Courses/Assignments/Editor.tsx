import { useParams } from "react-router";
import * as db from "../../Database";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../../../Labs/Lab3/Math";
import { addAssignment, updateAssignment } from "./reducer";
export default function AssignmentEditor() {
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { cid, aid } = useParams();
  const isNew = aid === "new";
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState(
    () =>
      assignments.find((assignment: any) => assignment._id === aid) || {
        course: cid,
      }
  );
  return (
    <div id="wd-assignments-editor" style={{ textAlign: "left" }}>
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment?.title}
        placeholder="Enter assignment name"
        className="form-control"
        onChange={(e) => {
          setAssignment({ ...assignment, title: e.target.value });
        }}
      />
      <br />
      <br />
      <textarea
        id="wd-description"
        placeholder="Enter assignment description"
        className="form-control"
        value={assignment?.description}
        onChange={(e) => {
          setAssignment({ ...assignment, description: e.target.value });
        }}
      ></textarea>
      <br />

      <div className="row mb-3">
        <div className="col-md-3 text-md-end">
          <label htmlFor="wd-points">Points</label>
        </div>
        <div className="col-md-9">
          <input
            id="wd-points"
            value={assignment?.points}
            placeholder="Enter points"
            className="form-control"
            onChange={(e) => {
              setAssignment({ ...assignment, points: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3 text-md-end">
          <label htmlFor="wd-group">Assignment Group</label>
        </div>
        <div className="col-md-9">
          <select id="wd-group" className="form-control">
            <option value="assignments">ASSIGNMENTS</option>
            <option value="labs">LABS</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-3 text-md-end">
          <label htmlFor="wd-display-grade-as">Display Grade As</label>
        </div>
        <div className="col-md-9">
          <select id="wd-display-grade-as" className="form-control">
            <option value="percentage">Percentage</option>
            <option value="gpa">GPA</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3 text-md-end">
          <label htmlFor="wd-submission-type">Submission Type</label>
        </div>

        <div
          className="col-md-3"
          style={{ border: "1px solid black", padding: "10px", width: "50%" }}
        >
          <div className="row-mb-3">
            <select id="wd-submission-type" className="form-control">
              <option value="online">Online</option>
              <option value="paper">Paper</option>
              <option value="external_tool">External Tool</option>
            </select>
          </div>
          <div className="row mb-3">
            <div className="row-mb-3 ">
              <label id="wd-text-entry" style={{ fontWeight: "700" }}>
                Online Entry Options
              </label>
            </div>
            <div className="row-mb-3">
              <div className="form-check">
                <input
                  id="wd-text-entry"
                  type="checkbox"
                  value="text_entry"
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="wd-text-entry">
                  Text Entry
                </label>
              </div>
              <div className="form-check">
                <input
                  id="wd-website-url"
                  type="checkbox"
                  value="website_url"
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="wd-website-url">
                  Website URL
                </label>
              </div>
              <div className="form-check">
                <input
                  id="wd-media-recordings"
                  type="checkbox"
                  value="media_recordings"
                  className="form-check-input"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-media-recordings"
                >
                  Media Recordings
                </label>
              </div>
              <div className="form-check">
                <input
                  id="wd-student-annotation"
                  type="checkbox"
                  value="student_annotation"
                  className="form-check-input"
                />
                <label
                  className="form-check-label"
                  htmlFor="wd-student-annotation"
                >
                  Student Annotation
                </label>
              </div>
              <div className="form-check">
                <input
                  id="wd-file-upload"
                  type="checkbox"
                  value="file_uploads"
                  className="form-check-input"
                />
                <label className="form-check-label" htmlFor="wd-file-upload">
                  File Uploads
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-3 text-md-end">
          <label htmlFor="wd-submission-type">Assign</label>
        </div>

        <div
          className="col-md-3"
          style={{ border: "1px solid black", padding: "10px", width: "50%" }}
        >
          <div className="row mb-3">
            <div className="col-md-3 text-md-end">
              <label htmlFor="wd-assign-to">Assign To</label>
            </div>
            <div className="col-md-9">
              <input
                id="wd-assign-to"
                placeholder="Enter assignee"
                className="form-control"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 text-md-end">
              <label htmlFor="wd-due-date">Due</label>
            </div>
            <div className="col-md-9">
              <input
                id="wd-due-date"
                type="date"
                defaultValue="2023-12-31"
                className="form-control"
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-3 text-md-end">
              <label htmlFor="wd-available-from">Available From</label>
            </div>
            <div className="col-md-3">
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2023-01-01"
                className="form-control"
                onChange={(e) => {
                  setAssignment({
                    ...assignment,
                    availableFrom: e.target.value,
                  });
                }}
              />
            </div>
            <div className="col-md-3 text-md-end">
              <label htmlFor="wd-available-until">Until</label>
            </div>
            <div className="col-md-3">
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2023-12-31"
                className="form-control"
                onChange={(e) => {
                  setAssignment({
                    ...assignment,
                    availableUntil: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-md-12 text-center">
          <button type="button" className="btn btn-secondary me-2 float-end">
            Cancel
          </button>
          <Link
            to={`../Assignments`}
            type="button"
            className="btn btn-danger float-end"
            onClick={() => {
              if (aid === "new") {
                dispatch(addAssignment(assignment));
              } else {
                dispatch(updateAssignment(assignment));
              }
            }}
          >
            Save
          </Link>
        </div>
      </div>
    </div>
  );
}
