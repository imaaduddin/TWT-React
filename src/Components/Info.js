import React from "react";

// function based component
// function Info() {
//   const title = "This is my title.";
//   const showTitle = true;

//   return (
//     <div>
//       <p>{1 + 3}</p>
//       <h1>{showTitle ? title : ""}</h1>
//       <h1>Inventory System</h1>
//       <p>Manage your stuff.</p>
//     </div>
//   )
// }

// class based component
class Info extends React.Component {
  render() {
    const title = "This is my title.";
    const showTitle = true;

    return (
      <div>
        <p>{1 + 3}</p>
        <h1>{showTitle ? title : ""}</h1>
        <h1>Inventory System</h1>
        <p>Manage your stuff.</p>
      </div>
    )
  }
}

export default Info;