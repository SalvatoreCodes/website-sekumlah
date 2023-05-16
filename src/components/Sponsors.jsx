import React from "react";
import alfamart from "../assets/alfamart.svg";
import BNI from "../assets/BNI.svg";
import meta from "../assets/meta.svg";
import testimony from "../assets/testimony.svg";
import wave from "../assets/wave.svg";

function Sponsors() {
  return (
    <div className="sponsor">
      <div className="sponsor-sponsors-container">
        <h6>Berkolaborasi dengan</h6>
        <div className="sponsor-sponsors">
          <img src={alfamart} alt="alfamart" />
          <img src={BNI} alt="bni" />
          <img src={meta} alt="meta" />
        </div>
      </div>
      <div className="testimony-container">
        <img src={testimony} alt="testimony" />
        <img src={testimony} alt="testimony" />
        <img src={testimony} alt="testimony" />
        <img src={testimony} alt="testimony" />
        <img src={testimony} alt="testimony" />
      </div>
      <img src={wave} alt="wave" className="sponsor-wave" />
    </div>
  );
}

export default Sponsors;
