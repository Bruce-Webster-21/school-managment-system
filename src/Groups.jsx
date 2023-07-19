import GroupItem from "./group-components/GroupItem";
import "./group-components/groups.css"

export default function Groups() {
  return (
    <>
      <div className="section">
        <h1 className="title">Groups</h1>
        <GroupItem />
      </div>
    </>
  );
}
