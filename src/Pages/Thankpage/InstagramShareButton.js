import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

const InstagramShareButton = (props) => {
  let content = (
    <div className="sharebtn sharebtn--ig" onClick={() => props.show()}>
      <FontAwesomeIcon
        icon={faInstagramSquare}
        size={"3x"}
      />
    </div>
  );

  return content;
};

export default InstagramShareButton;
