import React from "react";
import logoSekolah from "../assets/logo sekolah 1.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import youtube from "../assets/youtube.svg";
import tiktok from "../assets/tiktok.svg";
import downArrow from "../assets/down-arrow.svg";
import computerVector from "../assets/computer vector.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero--navbar">
        <div className="hero--navbar--navigations">
          <img src={logoSekolah} alt="logo sekolah" />
          <a href="">
            <h6>About us</h6>
          </a>
          <a href="">
            <h6>Contact</h6>
          </a>
        </div>
        <div className="hero--navbar--socials">
          <a href="https://www.facebook.com/Christvochs/" target="_blank">
            <img src={facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/smkskr2tomohon/?hl=en"
            target="_blank"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            href="https://www.youtube.com/@christvochs2tomohon447/videos"
            target="_blank"
          >
            <img src={youtube} alt="youtube" />
          </a>
          <a href="https://www.tiktok.com/@smkskr2tomohon" target="_blank">
            <img src={tiktok} alt="tiktok" />
          </a>
        </div>
      </div>
      <div className="hero--content">
        <div className="call-to-action">
          <h1>SMK BISA!</h1>
          <h2>
            SMKS Kristen 2 Tomohon Mengemukakan pembelajaran yang menyenangkan
            dan menarik.
          </h2>
          <button>
            Pelajari lebih lanjut <img src={downArrow} alt="down arrow" />
          </button>
        </div>
        <img src={computerVector} alt="computer vector" />
      </div>
    </div>
  );
}

export default Hero;
