import { Outlet, Link } from "react-router-dom";

export default function Navbar({ title }) {
  return (
    <>
      <nav>
        <h1 className="title">{title}</h1>
        <ul>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/teachers">Teachers</Link>
          <Link to="/students">Students</Link>
          <Link to="/groups">Groups</Link>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
