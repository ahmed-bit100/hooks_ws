import React, { useEffect, useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = `you clicked ${count} times`;
    console.log("updating title");
  }, [count]);
  return (
    <div>
      <input
        className="inp"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Count : {count} </button>
    </div>
  );
}

export default HookCounter;
