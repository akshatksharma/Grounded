import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const InstagramShareButton = (props) => {
  let content = (
    <button
      className="sharebtn sharebtn--ig"
      onClick={() => props.show()}
      aria-label="Share by Instagram"
      aria-haspopup
      tabIndex="0"
    >
      <FontAwesomeIcon icon={faInstagramSquare} size={"3x"} />
    </button>
  );

  return content;
};

export default InstagramShareButton;
