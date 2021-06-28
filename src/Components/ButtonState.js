import React from "react";
import {useState} from "react";

function ButtonState() {
  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Title:{title}</p>
      <p>Counter:{count}</p>
      <button>Update Title</button>
      <button>Update Count</button>
    </div>
  )
}

export default ButtonState;