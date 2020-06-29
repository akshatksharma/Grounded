import React from "react";
import "./Footer.css";

const Footer = () => {
  let content = (
    <div className="footer">
      <a className="flow" href="#header">
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
        <p className="text bold">Back to Top</p>
      </a>
    </div>
  );
  return content;
};

export default React.memo(Footer);
