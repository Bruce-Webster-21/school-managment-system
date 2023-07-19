import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./DashBoard";
import Teachers from "./Teachers";
import Groups from "./Groups";
import Students from "./Students";

function App() {
  const [students, setStudents] = useState(() => {
    const localValue = localStorage.getItem("STUDENTS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("STUDENTS", JSON.stringify(students));
  }, [students]);

  const [teachers, setTeachers] = useState(() => {
    const localValue = localStorage.getItem("TEACHERS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("TEACHERS", JSON.stringify(teachers));
  }, [teachers]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar title="Sapienza Academy" />}>
            <Route
              path="dashboard"
              element={<Dashboard students={students} teachers={teachers} />}
            />
            <Route
              path="teachers"
              element={
                <Teachers teachers={teachers} setTeachers={setTeachers} />
              }
            />
            <Route
              path="students"
              element={
                <Students students={students} setStudents={setStudents} />
              }
            />
            <Route path="groups" element={<Groups />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
