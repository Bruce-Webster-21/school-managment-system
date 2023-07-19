import "./students-components/students.css";
import { useEffect, useState } from "react";
import { AddStudentForm } from "./students-components/AddStudentForm";
import { StudentList } from "./students-components/StudentList";
import { EditStudent } from "./students-components/EditStudent";

export default function Students({ students, setStudents }) {
  const [show, setShow] = useState(false);
  const [showEditStudent, setShowEditStudent] = useState(false);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [monthlyFee, setMonthlyFee] = useState("");
  const [nationality, setNationality] = useState("");
  const [search, setSearch] = useState("");

  function addStudent(
    firstName,
    lastName,
    email,
    number,
    dateOfBirth,
    nationality,
    monthlyFee
  ) {
    setStudents((currentStudents) => {
      return [
        ...currentStudents,
        {
          id: crypto.randomUUID(),
          firstName,
          lastName,
          email,
          number,
          dateOfBirth,
          nationality,
          monthlyFee,
        },
      ];
    });
    setShow(false);
  }

  function deleteStudent(id) {
    setStudents((currentStudents) => {
      return currentStudents.filter((student) => student.id !== id);
    });
  }

  function editStudent(
    id,
    firstName,
    lastName,
    email,
    number,
    dateOfBirth,
    nationality,
    monthlyFee
  ) {
    setId(id);
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setNumber(number);
    setdateOfBirth(dateOfBirth);
    setMonthlyFee(monthlyFee);
    setNationality(nationality);
    setShowEditStudent(true);
  }

  return (
    <>
      {showEditStudent && (
        <EditStudent
          setShowEditStudent={setShowEditStudent}
          id={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          number={number}
          dateOfBirth={dateOfBirth}
          nationality={nationality}
          monthlyFee={monthlyFee}
          addStudent={addStudent}
          deleteStudent={deleteStudent}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setNumber={setNumber}
          setdateOfBirth={setdateOfBirth}
          setNationality={setNationality}
          setMonthlyFee={setMonthlyFee}
        />
      )}
      <div className="section">
        <div className="d-flex">
          <h1 className="title">{students.length} students </h1>
          <button
            onClick={() => {
              setShow(() => !show);
            }}
            className="add-teacher-button"
          >
            Add
          </button>
          <button className="add-teacher-button">Archive</button>
        </div>
        {show && <AddStudentForm addStudent={addStudent} />}
        <div className="search-bar-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <StudentList
        search={search}
        deleteStudent={deleteStudent}
        students={students}
        editStudent={editStudent}
      />
    </>
  );
}
