export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="labs">LABS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="gpa">GPA</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="paper">Paper</option>
              <option value="external_tool">External Tool</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td>
            <div id="wd-text-entry" style={{ textAlign: "left" }}>
              <label id="wd-text-entry">Online Entry Options</label>
              <br />
              <label>
                <input id="wd-text-entry" type="checkbox" value="text_entry" />{" "}
                Text Entry
              </label>
              <br />
              <label>
                <input
                  id="wd-website-url"
                  type="checkbox"
                  value="website_url"
                />{" "}
                Website URL
              </label>
              <br />
              <label>
                <input
                  id="wd-media-recordings"
                  type="checkbox"
                  value="media_recordings"
                />{" "}
                Media Recordings
              </label>
              <br />
              <label>
                <input
                  id="wd-student-annotation"
                  type="checkbox"
                  value="student_annotation"
                />{" "}
                Student Annotation
              </label>
              <br />
              <label>
                <input
                  id="wd-file-upload"
                  type="checkbox"
                  value="file_uploads"
                />{" "}
                File Uploads
              </label>
            </div>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Assign To</label>
          </td>
          <td>
            <input id="wd-assign-to" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Due</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Available From</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" />
          </td>
          <td align="right" valign="top">
            <label>Until</label>
          </td>
          <td>
            <input id="wd-available-until" type="date" />
          </td>
        </tr>
        <br/>
        <td>
            <tr>
                <td >
                    <button type="button" >Cancel</button>
                    <button type="button" >Save</button>
                </td>
            </tr>
        </td>
      </table>
    </div>
  );
}
