import { useState } from "react";

export function StudentItem({ deleteStudent, student, editStudent }) {
  const [checked, setChecked] = useState(false);
  console.log(student);

  return (
    <li key={student.id} className={checked ? "teacher-checked" : "teacher"}>
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
                {student.firstName} {student.lastName}
              </p>
            </div>
            <div className="d-flex">
              <span className="small-font-size">E-mail :</span>
              <p className="teacher-sub-info">{student.email}</p>
            </div>
            <div className="d-flex">
              <span className="small-font-size">Tel :</span>
              <p className="teacher-sub-info">{student.number}</p>
            </div>
          </div>
          <div>
            <div className="d-flex">
              <span className="small-font-size">Birthday :</span>
              <p className="teacher-sub-info">{student.dateOfBirth}</p>
            </div>
            <div className="d-flex">
              <span className="small-font-size">Nationality :</span>
              <p className="teacher-sub-info">{student.nationality}</p>
            </div>
            <div className="d-flex">
              <span className="small-font-size">Fee (DOP):</span>
              <p className="teacher-sub-info">{student.monthlyFee}/month</p>
            </div>
          </div>
        </ul>
      </div>
      <div className="teacher-item-button-container">
        {!checked && (
          <button
            onClick={() =>
              editStudent(
                student.id,
                student.firstName,
                student.lastName,
                student.email,
                student.number,
                student.dateOfBirth,
                student.nationality,
                student.monthlyFee
              )
            }
            className="edit-btn"
          >
            Edit
          </button>
        )}
        {checked && (
          <button
            onClick={() => deleteStudent(student.id)}
            className="delete-btn"
          >
            Delete
          </button>
        )}
      </div>
    </li>
  );
}
