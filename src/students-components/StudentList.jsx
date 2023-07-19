import { StudentItem } from "./StudentItem";

export function StudentList({ deleteStudent, students, editStudent, search }) {
  return (
    <ul className="section">
      {students.length === 0 && (
        <h2 className="sub-title">No students added*</h2>
      )}
      {students
        .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
        .filter(
          (student) =>
            student.firstName.toLowerCase().includes(search) ||
            student.lastName.toLowerCase().includes(search) ||
            student.email.toLowerCase().includes(search) ||
            student.number.toLowerCase().includes(search) ||
            student.dateOfBirth.toLowerCase().includes(search) ||
            student.nationality.toLowerCase().includes(search)
        )
        .map((student) => {
          return (
            <StudentItem
              deleteStudent={deleteStudent}
              student={student}
              key={student.id}
              editStudent={editStudent}
            />
          );
        })}
    </ul>
  );
}
