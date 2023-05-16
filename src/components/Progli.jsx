import React from "react";
import Proglis from "./sub-components/Proglis";
import ruangPPLG from "../assets/ruang pplg.jpeg";
import pplgProfile from "../assets/pplg-profile.jpeg";
import data from "../data";

function Progli() {
  return (
    <div className="progli-container">
      <Proglis
        image={ruangPPLG}
        kelas="PPLG"
        profile={pplgProfile}
        information={data[0]}
      />
      <Proglis />
      <Proglis />
      <Proglis />
      <Proglis />
      <Proglis />
      <Proglis />
      <Proglis />
    </div>
  );
}

export default Progli;
