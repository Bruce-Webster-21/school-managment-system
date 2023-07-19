import { useState } from "react";

export function AddStudentForm({ addStudent }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [monthlyFee, setMonthlyFee] = useState("");
  const [nationality, setNationality] = useState("");

  const values = [
    {
      value: firstName,
      setValue: setFirstName,
      placeholder: "Firstname",
      type: "text",
    },
    {
      value: lastName,
      setValue: setLastName,
      placeholder: "Lastname",
      type: "text",
    },
    {
      value: email,
      setValue: setEmail,
      placeholder: "E-mail",
      type: "email",
    },
    {
      value: number,
      setValue: setNumber,
      placeholder: "Number",
      type: "text",
    },
    {
      value: dateOfBirth,
      setValue: setdateOfBirth,
      placeholder: "Date of birth",
      type: "date",
    },
    {
      value: nationality,
      setValue: setNationality,
      placeholder: "Nationality",
      type: "text",
    },
    {
      value: monthlyFee,
      setValue: setMonthlyFee,
      placeholder: "Monthly Fee",
      type: "text",
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    addStudent(
      firstName,
      lastName,
      email,
      number,
      dateOfBirth,
      nationality,
      monthlyFee
    );
    setFirstName("");
    setLastName("");
    setEmail("");
    setNumber("");
    setdateOfBirth("");
    setMonthlyFee("");
    setNationality("");
  }

  return (
    <form onSubmit={handleSubmit} className="add-teacher-input">
      <div className="flex-wrap">
        {values.map((object) => {
          return (
            <input
              value={object.value}
              onChange={(e) => {
                object.setValue(e.target.value);
              }}
              type={object.type}
              placeholder={object.placeholder}
              required
            />
          );
        })}
      </div>
      <button className="add-btn">Add Student</button>
    </form>
  );
}
