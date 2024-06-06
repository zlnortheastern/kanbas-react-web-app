import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find(a => a._id === aid);
  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input type="text" className="form-control" id="wd-name" value={assignment && assignment.title} />
      </div>
      <div className="mb-3">
        <textarea className="form-control" id="wd-description" rows={5}>
          The assignment is available online
          Submit a link to the landing page
          of your Web application running on
          Netlify. The landing page should
          include the following: Your full
          name and section Links to each of
          the lab assignments Link to the
          Knabas application Links to all
          relevant source code repositories.
          The Kanbas application should
          include a link to navigate back
          to the landing page.
        </textarea>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-points"
          className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input type="number" className="form-control"
            id="wd-points" value="100" />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-group"
          className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select id="wd-group" className="form-select">
            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label text-end">
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            <option selected value="Percentage">Percentage</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-submission-type"
          className="col-sm-2 col-form-label text-end">
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="border rounded-2 p-3">
            <select id="wd-submission-type" className="form-select">
              <option selected value="Online">Online</option>
            </select>
            <p className="mt-3 fw-bold">
              Online Entry Options
            </p>
            <div className="form-check my-2">
              <input type="checkbox" className="form-check-input"
                name="check-genre" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check my-2">
              <input type="checkbox" className="form-check-input"
                name="check-genre" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check my-2">
              <input type="checkbox" className="form-check-input"
                name="check-genre" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check my-2">
              <input type="checkbox" className="form-check-input"
                name="check-genre" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="form-check my-2">
              <input type="checkbox" className="form-check-input"
                name="check-genre" id="wd-file-upload" />
              <label htmlFor="wd-file-upload" className="">File Uploads</label>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-3 row">
        <p className="col-sm-2 col-form-label text-end">
          Assign
        </p>
        <div className="col-sm-10">
          <div className="border rounded-2 p-3">
            <label htmlFor="wd-assign-to" className="fw-bold">Assign to</label>
            <input id="wd-assign-to" className="form-control" value="Everyone" />
            <div className="my-3">
              <label htmlFor="wd-due-date" className="form-label fw-bold">Due</label>
              <input type="datetime-local" id="wd-due-date" className="form-control" value="2024-05-13T23:59" />
            </div>
            <div className="row my-2 my-3">
              <div className="col-sm-6">
                <label htmlFor="wd-available-from" className="form-label fw-bold">Available from</label>
                <input type="datetime-local" id="wd-available-from" className="form-control" value="2024-05-06T23:59" />
              </div>
              <div className="col-sm-6">
                <label htmlFor="wd-available-until" className="form-label fw-bold">Until</label>
                <input type="datetime-local" id="wd-available-until" className="form-control" value="2024-05-20T23:59" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div id="wd-modules-controls" className="text-nowrap">
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}
          id="wd-assignments-editor-save"
          className="btn btn-lg btn-danger me-1 float-end">
          Save
        </Link>
        <Link to={`/Kanbas/Courses/${cid}/Assignments`}
          id="wd-assignments-editor-cancel"
          className="btn btn-lg btn-secondary me-1 float-end">
          Cancel
        </Link>
      </div>

    </div>
  );
}
