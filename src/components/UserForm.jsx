import React from "react";

function UserForm({ goback }) {
  return (
    <>
      <div className="text-sm mb-2 text-align-left">
        <div style={{ cursor: "pointer", color: "#57a8e4" }} onClick={goback}>
          &#x261A; Lets go back
        </div>
      </div>
      <h5>Coming soon!!</h5>;
    </>
  );
}

export default UserForm;
