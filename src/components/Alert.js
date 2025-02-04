// import React from "react";

// export default function Alert(props) {
//   const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

//   return (
//     <div style={{ height: "50px" }}>
//       {props.alert && (
//         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
//           <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";

export default function Alert(props) {
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div style={{ height: "20px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
          style={{ padding: "5px 10px", fontSize: "14px" }}
        >
          <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}
