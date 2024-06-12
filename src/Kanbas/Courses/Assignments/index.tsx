import AssignmentsControls from "./AssignmentsControls"
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotepadThin } from "react-icons/pi";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month = monthNames[date.getMonth()];
    const day = date.getDate();

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;

    return `${month} ${day} at ${hours}:${minutesStr}${ampm}`;
  }
  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br /><br /><br /><br />
      <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-assignments-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          <IoMdArrowDropdown className="me-2" />
          <span className="fw-bold">ASSIGNMENTS</span>
          <IoEllipsisVertical className="fs-4 float-end mt-1" />
          <BsPlusLg className="float-end fs-4 me-3 mt-1 ms-1" />
          <div className="border float-end rounded-5 border-dark px-2">40% of Total </div>
        </div>
        <ul id="wd-assignment-list" className="wd-assignment-list list-group rounded-0">
          {assignments.filter((a) => a.course === cid).map((assignment) => (
            <li className="wd-assignment-item list-group-item d-flex align-items-center p-3 ps-1">
              <BsGripVertical className="me-2 fs-3 " />
              <PiNotepadThin className="me-4 fs-3 text-success" />
              <div>
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                  className="wd-assignment-link fs-5 fw-bold text-decoration-none text-dark">
                  {assignment.title}
                </Link>
                <p className="mb-0 text-muted">
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> {formatDate(assignment.assign.availableFrom)} | <b>Due</b> {formatDate(assignment.assign.due)} | {assignment.points}
                </p>
              </div>
              <div className="ms-auto">
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
              </div>
            </li>
          ))}

        </ul>
      </li>
    </div>
  );
}
