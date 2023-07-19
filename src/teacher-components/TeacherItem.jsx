import { useState } from "react";

export function TeacherItem({ deleteTeacher, teacher, editTeacher }) {
  const [checked, setChecked] = useState(false);

  return (
    <li key={teacher.id} className={checked ? "teacher-checked" : "teacher"}>
      <div className="d-flex row">
        <input
          onChange={() => setChecked(() => !checked)}
          className="checkbox"
          type="checkbox"
        />
        <ul className="d-flex">
          <div className="width">
            <div className="d-flex">
              <span className="small-font-size-1">Name :</span>
              <p className="teacher-name">
                {teacher.firstName} {teacher.lastName}
              </p>
            </div>
            <div className="d-flex">
              <span className="small-font-size">E-mail :</span>
              <p className="teacher-sub-info">{teacher.email}</p>
            </div>
            <div className="d-flex">
              <span className="small-font-size">Tel :</span>
              <p className="teacher-sub-info">{teacher.number}</p>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <span className="small-font-size">Birthday :</span>
              <p className="teacher-sub-info">{teacher.dateOfBirth}</p>
            </div>
            <div className="d-flex">
              <span className="small-font-size">Nationality :</span>
              <p className="teacher-sub-info">{teacher.nationality}</p>
            </div>
            <div className="d-flex">
              <span className="small-font-size">Rate (DOP):</span>
              <p className="teacher-sub-info">{teacher.hourlyRate}/h</p>
            </div>
          </div>
        </ul>
      </div>
      <div className="teacher-item-button-container">
        {!checked && (
          <button
            onClick={() =>
              editTeacher(
                teacher.id,
                teacher.firstName,
                teacher.lastName,
                teacher.email,
                teacher.number,
                teacher.dateOfBirth,
                teacher.nationality,
                teacher.hourlyRate
              )
            }
            className="edit-btn"
          >
            Edit
          </button>
        )}
        {checked && (
          <button
            onClick={() => deleteTeacher(teacher.id)}
            className="delete-btn"
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
}
