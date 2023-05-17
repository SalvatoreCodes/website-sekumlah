import React from "react";
import Proglis from "./sub-components/Proglis";
import { data } from "../data";
import progliWave from "../assets/progli wave.svg";

function Progli() {
  return (
    <div className="progli-container">
      {data.map((data) => (
        <Proglis
          id={data.id}
          kelas={data.kelas}
          profile={data.profile}
          wideImage={data.wideImage}
          information={data.information}
        />
      ))}
      <img src={progliWave} alt="progli wave" className="progli-wave" />
    </div>
  );
}

export default Progli;
