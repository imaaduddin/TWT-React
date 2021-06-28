import React from "react";

function AddItem() {
  const value = "value";
  return (
    <div>
      <label for="text-form">Type something:</label>
      <input type="text" value={value} id="text-form"/>
    </div>
  )
}

export default AddItem;