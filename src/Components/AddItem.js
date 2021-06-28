import React from "react";

function AddItem(props) {
  const value = props.text;
  return (
    <div>
      <label for="text-form">Type something:</label>
      <input type="text" value={value} id="text-form"/>
      <p>{props.number}</p>
    </div>
  )
}

export default AddItem;