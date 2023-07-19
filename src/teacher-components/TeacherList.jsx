import { TeacherItem } from "./TeacherItem";

export function TeacherList({ deleteTeacher, teachers, editTeacher, search }) {
  return (
    <ul className="section">
      {teachers.length === 0 && (
        <h2 className="sub-title">No teachers added*</h2>
      )}
      {teachers
        .sort((a, b) => (a.firstName > b.firstName ? 1 : -1))
        .filter(
          (teacher) =>
            teacher.firstName.toLowerCase().includes(search) ||
            teacher.lastName.toLowerCase().includes(search) ||
            teacher.email.toLowerCase().includes(search) ||
            teacher.number.toLowerCase().includes(search) ||
            teacher.dateOfBirth.toLowerCase().includes(search) ||
            teacher.nationality.toLowerCase().includes(search)
        )
        .map((teacher) => {
          return (
            <TeacherItem
              deleteTeacher={deleteTeacher}
              teacher={teacher}
              key={teacher.id}
              editTeacher={editTeacher}
            />
          );
        })}
    </ul>
  );
}
