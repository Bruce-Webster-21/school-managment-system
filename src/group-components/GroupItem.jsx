import { useState } from "react";

export default function GroupItem() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="group-item">
        <div>
          <p htmlFor="Group Name">Group name:</p>
          <p htmlFor="Group Name">Teacher:</p>
          {show && (
            <div className="students-list">
              <p>Jissa Lora</p>
              <p>Merian Lora</p>
              <p>Leonela Jimenez</p>
            </div>
          )}
        </div>
        <button onClick={() => setShow(!show)} className="show-more-btn">
          Show More
        </button>
      </div>

      <div className="group-item">
        <div>
          <p htmlFor="Group Name">Group name:</p>
          <p htmlFor="Group Name">Teacher:</p>
          {show && (
            <div className="students-list">
              <p>ksjhdfkjasdfsd</p>
              <p>Mdfgsdfgsdfgsdfg</p>
              <p>Ldfgsdfgsdfgsdfgez</p>
              <p>Mdfgsdfgsdfgsdfg</p>
              <p>Ldfgsdfgsdfgsdfgez</p>
              <p>Mdfgsdfgsdfgsdfg</p>
              <p>Ldfgsdfgsdfgsdfgez</p>
            </div>
          )}
        </div>
        <button onClick={() => setShow(!show)} className="show-more-btn">
          Show More
        </button>
      </div>

      <div className="group-item">
        <div>
          <p htmlFor="Group Name">Group name:</p>
          <p htmlFor="Group Name">Teacher:</p>
          {show && (
            <div className="students-list">
              <p>Jdfgsdfga</p>
              <p>Medsfgsdfgsdfga</p>
              <p>Leodfgsdfgsdfgnez</p>
              <p>Medsfgsdfgsdfga</p>
              <p>Leodfgsdfgsdfgnez</p>
            </div>
          )}
        </div>
        <button onClick={() => setShow(!show)} className="show-more-btn">
          Show More
        </button>
      </div>
    </>
  );
}
