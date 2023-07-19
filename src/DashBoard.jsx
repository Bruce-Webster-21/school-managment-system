import "./App.css";

export default function Dashboard({ students, teachers }) {
  let montlyEarnings = students.reduce(function (prev, current) {
    return prev + +current.monthlyFee;
  }, 0);

  return (
    <>
      <div className="section">
        <h1 className="title">DashBoard</h1>
        <p>Monthly Earnings : {montlyEarnings}</p>
        <p>Total Students : {students.length}</p>
        <p>Total Teachers : {teachers.length}</p>
      </div>
    </>
  );
}
