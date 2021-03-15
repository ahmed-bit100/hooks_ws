import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseToggle() {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <HookMouse />}
    </div>
  );
}

export default MouseToggle;
