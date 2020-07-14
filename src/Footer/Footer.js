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
    <footer className="footer ">
      <div className="footer__content flow">
        <div className="followUs">
          <h3 className="footer__title">Follow Us</h3>
          <div className="footer__icons">
            <a href="//twitter.com">
              <FontAwesomeIcon
                className="twitter"
                title="Link to Twitter page"
                style={{ color: "000" }}
                icon={faTwitter}
                size={"2x"}
              />
            </a>
            <a href="//facebook.com">
              <FontAwesomeIcon
                className="facebook"
                title="Link to Facebook page"
                style={{ color: "000" }}
                icon={faFacebook}
                size={"2x"}
              />
            </a>
            <a href="//instagram.com">
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
