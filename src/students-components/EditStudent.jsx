import { useState } from "react";

export function EditStudent({
  setShowEditStudent,
  id,
  firstName,
  lastName,
  email,
  number,
  dateOfBirth,
  nationality,
  monthlyFee,
  addStudent,
  deleteStudent,
  setFirstName,
  setLastName,
  setEmail,
  setNumber,
  setdateOfBirth,
  setNationality,
  setMonthlyFee,
}) {
  const [showBtn, setShowBtn] = useState(false);

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

  return (
    <>
      <form
        onSubmit={() => {
          addStudent(
            firstName,
            lastName,
            email,
            number,
            dateOfBirth,
            nationality,
            monthlyFee
          );
          deleteStudent(id);
        }}
        className="edit-pop-up-container"
      >
        <div onChange={() => setShowBtn(true)} className="edit-pop-up">
          <div className="flex-wrap">
            {values.map((object) => {
              return (
                <div className="input">
                  <label htmlFor="firstName">{object.placeholder}</label>
                  <input
                    type={object.type}
                    onChange={(e) => object.setValue(e.target.value)}
                    defaultValue={object.value}
                    value={object.value}
                    required
                  />
                </div>
              );
            })}
          </div>
          <div className="btn-container">
            {showBtn && <button className="green">Save</button>}
            <button className="grey" onClick={() => setShowEditStudent(false)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
