import React, { useState } from "react";

function ExampleThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form className="frm">
        <input
          className="inp"
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          className="inp"
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </form>
      <h2>your name is : {name.firstName} </h2>
      <h2>your last name is : {name.lastName} </h2>
      <h2> {JSON.stringify(name)} </h2>
    </div>
  );
}

export default ExampleThree;
