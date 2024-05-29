import AssignmentsControls from "./AssignmentsControls"
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotepadThin } from "react-icons/pi";
import GreenCheckmark from "../Modules/GreenCheckmark";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentsControls /><br /><br /><br /><br />
      <li className="wd-assignments list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-assignments-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          <IoMdArrowDropdown className="me-2" />
          <span className="fw-bold">ASSIGNMENTS</span>
          <IoEllipsisVertical className="fs-4 float-end mt-1" />
          <BsPlusLg className="float-end fs-4 me-3 mt-1" />
          <div className="border float-end rounded-5 border-dark px-2">40% of Total </div>
        </div>
        <ul id="wd-assignment-list" className="wd-assignment-list list-group rounded-0">
          <li className="wd-assignment-item list-group-item d-flex align-items-center p-3 ps-1">
            <BsGripVertical className="me-2 fs-3 " />
            <PiNotepadThin className="me-4 fs-3 text-success" />
            <div>
              <a className="wd-assignment-link fs-5 fw-bold text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A1 - ENV + HTML
              </a>
              <p className="mb-0 text-muted">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts
              </p>
            </div>
            <div className="ms-auto">
              <GreenCheckmark />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </li>

          <li className="wd-assignment-item list-group-item d-flex align-items-center p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <PiNotepadThin className="me-4 fs-3 text-success" />
            <div>
              <a className="wd-assignment-link fs-5 fw-bold text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A2 - CSS + BOOTSTRAP
              </a>
              <p className="mb-0 text-muted">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts
              </p>
            </div>
            <div className="ms-auto">
              <GreenCheckmark />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </li>

          <li className="wd-assignment-item list-group-item d-flex align-items-center p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
            <PiNotepadThin className="me-4 fs-3 text-success" />
            <div>
              <a className="wd-assignment-link fs-5 fw-bold text-decoration-none text-dark"
                href="#/Kanbas/Courses/1234/Assignments/123">
                A3 - JAVASCRIPT + REACT
              </a>
              <p className="mb-0 text-muted">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts
              </p>
            </div>
            <div className="ms-auto">
              <GreenCheckmark />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </li>
        </ul>
      </li>
    </div>
  );
}
