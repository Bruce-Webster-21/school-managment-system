import { useState } from "react";

export function EditTeacher({
  setShowEditTeacher,
  id,
  firstName,
  lastName,
  email,
  number,
  dateOfBirth,
  nationality,
  hourlyRate,
  addTeacher,
  deleteTeacher,
  setFirstName,
  setLastName,
  setEmail,
  setNumber,
  setdateOfBirth,
  setNationality,
  setHourlyRate,
}) {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <>
      <form
        onSubmit={() => {
          addTeacher(
            firstName,
            lastName,
            email,
            number,
            dateOfBirth,
            nationality,
            hourlyRate
          );
          deleteTeacher(id);
        }}
        className="edit-pop-up-container"
      >
        <div onChange={() => setShowBtn(true)} className="edit-pop-up">
          <div className="d-flex gap">
            <div>
              <div className="input">
                <label htmlFor="firstName">Firstname</label>
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  defaultValue={firstName}
                  value={firstName}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="lastname">Lastname</label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  defaultValue={lastName}
                  value={lastName}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="email">E-mail</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  defaultValue={email}
                  value={email}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="number">Number</label>
                <input
                  onChange={(e) => setNumber(e.target.value)}
                  type="text"
                  defaultValue={number}
                  value={number}
                  required
                />
              </div>
            </div>
            <div>
              <div className="input">
                <label htmlFor="number">Birthday</label>
                <input
                  onChange={(e) => setdateOfBirth(e.target.value)}
                  type="date"
                  defaultValue={dateOfBirth}
                  value={dateOfBirth}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="number">Nationality</label>
                <input
                  onChange={(e) => setNationality(e.target.value)}
                  type="text"
                  defaultValue={nationality}
                  value={nationality}
                  required
                />
              </div>
              <div className="input">
                <label htmlFor="number">Rate</label>
                <input
                  onChange={(e) => setHourlyRate(e.target.value)}
                  type="text"
                  defaultValue={hourlyRate}
                  value={hourlyRate}
                  required
                />
              </div>
            </div>
          </div>
          <div className="btn-container">
            {showBtn && <button className="green">Save</button>}
            <button className="grey" onClick={() => setShowEditTeacher(false)}>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
