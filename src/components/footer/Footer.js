import React, { useContext, useState } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import { FiInfo, FiX } from "react-icons/fi";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  const [infoButton, setInfoButton] = useState(false)
  return (
    <div className="footer-div">
      <div className="info-button">
        {infoButton ? (
          <FiX
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => setInfoButton(false)}
          />
        ) : (
          <FiInfo
            size={20}
            style={{ cursor: "pointer" }}
            onClick={() => setInfoButton(true)}
          />
        )}
      </div>
      {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p> */}
      <p
        className={isDark ? "dark-mode footer-text" : "footer-text"}
        style={{ visibility: infoButton ? "visible" : "hidden" }}
      >
        Theme by{" "}
        <a
          href="https://github.com/saadpasta/developerFolio"
          target="_blank"
          rel="noreferrer"
        >
          developerFolio
        </a>
      </p>
    </div>
  );
}
