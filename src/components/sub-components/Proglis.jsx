import React from "react";

function Proglis(props) {
  return (
    <div className="proglis">
      <img
        src={props.wideImage}
        alt={props.kelas}
        className="progli-wide-image"
      />
      <div className="progli-profile-text">
        <img src={props.profile} alt={props.kelas} className="progli-profile" />
        <div className="progli-text">
          <h6>{props.kelas}</h6>
          <p>{props.information}</p>
        </div>
      </div>
    </div>
  );
}

export default Proglis;
