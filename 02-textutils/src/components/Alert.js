import React from "react";
// import PropTypes from "prop-types";

export default function Alert(props) {
  return (
    // This syntax means 'first check if the value of props.alert is not null, then only return the JSX' this is very helpful syntax.
    props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} d-flex align-items-center`}
          role="alert"
        >
          <div>
            <strong>{props.alert.type} : </strong>
            {props.alert.messege}
          </div>
        </div>
      </div>
    )
  );
}

// Alert.propTypes = {
//   alert: PropTypes.object,
// };

// Alert.propTypes = {
//   alert: PropTypes.element.isRequired,
// };
