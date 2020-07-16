import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
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
    <footer className="footer ">
      <div className="footer__content flow">
        <div className="followUs">
          <h3 className="footer__title">Follow Us</h3>
          <div className="footer__icons">
            <a href="https://www.instagram.com/grounded.archive/">
              <FontAwesomeIcon
                className="instagram"
                title="Link to Instagram page"
                style={{ color: "000" }}
                icon={faInstagram}
                size={"2x"}
              />
            </a>
          </div>
        </div>
        <div className="contactUs">
          <div className="contactUs__content flow">
            <h3 className="footer__title">Contact Us</h3>
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
        </div>
      </div>
    </footer>
  );
  return content;
};

export default React.memo(Footer);
