import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scroll({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  let content = (
    <div className="footer ">
      <div className="footer__content flow">
        <div className="followUs">
          <h1 className="footer__title">Follow Us</h1>
          <div className="footer__icons">
            <FontAwesomeIcon
              style={{ color: "000" }}
              icon={faTwitter}
              size={"2x"}
            />
            <FontAwesomeIcon
              style={{ color: "000" }}
              icon={faFacebook}
              size={"2x"}
            />
            <FontAwesomeIcon
              style={{ color: "000" }}
              icon={faInstagram}
              size={"2x"}
            />
          </div>
        </div>
        <div className="contactUs">
          <h1 className="footer__title">Contact Us</h1>
          <p className="text">
            <a
              href="mailto:groundedarchives@gmail.com?subject=Question"
              target="_blank"
              rel="noopener noreferrer"
            >
              groundedarchives@gmail.com
            </a>
          </p>
          <p className="text">
            <a classname="text" href="tel:314-312-3524">
              (314) 312-3524
            </a>
          </p>
        </div>
        {/* <div className="scrolltop flow" onClick={scrollToTop}>
          <svg
            width="53"
            height="45"
            viewBox="0 0 53 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51 43L26.5 18.5L2 43M51 27.5L26.5 3L2 27.5"
              stroke="black"
              strokeWidth="4"
            />
          </svg>
          <p className="footer__title bold">Back to Top</p>
        </div> */}
      </div>
    </div>
  );
  return content;
};

export default React.memo(Footer);
