import "./teacher-components/teachers.css";
import { useEffect, useState } from "react";
import { AddTeacherForm } from "./teacher-components/AddTeacherForm";
import { TeacherList } from "./teacher-components/TeacherList";
import { EditTeacher } from "./teacher-components/EditTeacher";

export default function Teachers({ teachers, setTeachers }) {
  const [show, setShow] = useState(false);
  const [showEditTeacher, setShowEditTeacher] = useState(false);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [nationality, setNationality] = useState("");
  const [search, setSearch] = useState("");

  function addTeacher(
    firstName,
    lastName,
    email,
    number,
    dateOfBirth,
    nationality,
    hourlyRate
  ) {
    setTeachers((currentTeachers) => {
      return [
        ...currentTeachers,
        {
          id: crypto.randomUUID(),
          firstName,
          lastName,
          email,
          number,
          dateOfBirth,
          nationality,
          hourlyRate,
        },
      ];
    });
  }

  function deleteTeacher(id) {
    setTeachers((currentTeachers) => {
      return currentTeachers.filter((teacher) => teacher.id !== id);
    });
  }

  function editTeacher(
    id,
    firstName,
    lastName,
    email,
    number,
    dateOfBirth,
    nationality,
    hourlyRate
  ) {
    setId(id);
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setNumber(number);
    setdateOfBirth(dateOfBirth);
    setHourlyRate(hourlyRate);
    setNationality(nationality);
    setShowEditTeacher(true);
  }

  return (
    <>
      {showEditTeacher && (
        <EditTeacher
          setShowEditTeacher={setShowEditTeacher}
          id={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          number={number}
          dateOfBirth={dateOfBirth}
          nationality={nationality}
          hourlyRate={hourlyRate}
          addTeacher={addTeacher}
          deleteTeacher={deleteTeacher}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmail={setEmail}
          setNumber={setNumber}
          setdateOfBirth={setdateOfBirth}
          setNationality={setNationality}
          setHourlyRate={setHourlyRate}
        />
      )}
      <div className="section">
        <div className="d-flex">
          <h1 className="title">{teachers.length} teachers</h1>
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
        {show && <AddTeacherForm addTeacher={addTeacher} />}
        <div className="search-bar-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <TeacherList
        search={search}
        deleteTeacher={deleteTeacher}
        teachers={teachers}
        editTeacher={editTeacher}
      />
    </>
  );
}
