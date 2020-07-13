import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal.js";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from "react-share";
import InstagramShareButton from "./InstagramShareButton.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

import "./Thank.css";

const Thank = () => {
  const [visible, setVisible] = useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  const shareText =
    'The ongoing battles for health and justice have created new meaning in the spaces and objects that surround us.\n\nI added my voice to "Grounded: The Pandemic Archive.” Add your voice too by archiving an object that tells your story.';

  let content = (
    <div className="page page--thank">
      {visible ? (
        <Modal
          hide={toggleModal}
          title="Share to Instagram"
          body={
            <div className="flow">
              <p className="text">
                Please click here to download a graphic to share on your
                Instagram story.{" "}
              </p>
              <p className="text">
                Don’t forget to tag us using @grounndedarchive and
                #groundedarchive{" "}
              </p>
            </div>
          }
        />
      ) : null}
      <div className="box box--thank flow">
        <div className="box__header">
          <div className="header__title header__title--thank"> Thank You!</div>
        </div>
        <div className="box__content box__content--thank">
          <div className="box__text flow">
            <p className="text">
              Your contribution has been added to the archive. A confirmation
              and brief survey will be emailed to you. Thank you for helping us
              represent this moment in history.{" "}
            </p>
            <p className="text">
              Follow the link below to complete a brief survey.
            </p>
            <a
              className="text"
              target="_blank"
              rel="noopener"
              href="https://forms.gle/WVSSmgzmCs6nhWaz9"
            >
              https://forms.gle/WVSSmgzmCs6nhWaz9
            </a>
            <p className="text">
              We invite you to share your contribution and encourage others to
              add their voices to the archive. Share on social media using
              #groundedarchive
            </p>
          </div>
        </div>
        <div className="socialmedia">
          <TwitterShareButton
            className="sharebtn sharebtn--twitter"
            url="groundedarchive.com"
            title={shareText}
            hashtags={["groundedarchive"]}
          >
            <FontAwesomeIcon icon={faTwitterSquare} size={"3x"} />
          </TwitterShareButton>
          <FacebookShareButton
            className="sharebtn sharebtn--facebook"
            url="groundedarchive.com"
            quote={shareText}
            hashtag="#groundedarchive"
          >
            <FontAwesomeIcon icon={faFacebookSquare} size={"3x"} />
          </FacebookShareButton>
          <InstagramShareButton show={toggleModal}></InstagramShareButton>
          <a
            className="sharebtn sharebtn--email"
            target="_blank"
            rel="noopener"
            href="mailto:?subject=Grounded%3A%20The%20Pandemic%20Archive&body=I%20contributed%20my%20voice%20to%20%22Grounded%3A%20The%20Pandemic%20Archive%22%20because%20my%20story%20matters%20--%20and%20yours%20does%20too.%0D%0A%0D%0AThe%20crises%20of%20Covid-19%2C%20economic%20hardship%2C%20and%20the%20fight%20for%20racial%20justice%20have%20forced%20us%20to%20find%20new%20meaning%20in%20the%20spaces%20we%20inhabit%20and%20the%20objects%20that%20surround%20us.%20Add%20your%20voice%20to%20the%20historical%20record%20by%20archiving%20an%20object%20that%20tells%20your%20story.%0D%0A%0D%0Awww.groundedarchive.com"
          >
            <FontAwesomeIcon
              className="sharebtn--email"
              icon={faEnvelopeSquare}
              size={"3x"}
            />
          </a>
        </div>
        <NavLink className="button text" to="/">
          Back to homepage
        </NavLink>
      </div>
    </div>
  );

  return content;
};

export default React.memo(Thank);
