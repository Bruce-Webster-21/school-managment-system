import { useState } from "react";

export function AddTeacherForm({ addTeacher }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [nationality, setNationality] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTeacher(
      firstName,
      lastName,
      email,
      number,
      dateOfBirth,
      nationality,
      hourlyRate
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setNumber("");
    setdateOfBirth("");
    setHourlyRate("");
    setNationality("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-teacher-input">
      <div className="d-flex gap">
        <div>
          <input
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            placeholder="Firstname"
            required
          />
          <input
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            placeholder="Lastname"
            required
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="E-mail"
            required
          />
          <input
            value={number}
            onChange={(e) => {
              setNumber(e.target.value);
            }}
            type="text"
            placeholder="Phone number"
            required
          />
        </div>
        <div>
          <input
            value={dateOfBirth}
            onChange={(e) => {
              setdateOfBirth(e.target.value);
            }}
            type="date"
            placeholder="Date of Birth"
            required
          />
          <input
            value={nationality}
            onChange={(e) => {
              setNationality(e.target.value);
            }}
            type="text"
            placeholder="Nationality"
            required
          />
          <input
            value={hourlyRate}
            onChange={(e) => {
              setHourlyRate(e.target.value);
            }}
            type="num"
            placeholder="Rate"
            required
          />
        </div>
      </div>
      <button className="add-btn">Add Teacher</button>
    </form>
  );
}
