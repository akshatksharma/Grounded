import React from "react";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  let content = (
    <div className="footer">
      <div className="flow" onClick={scrollToTop}>
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
      </div>
    </div>
  );
  return content;
};

export default React.memo(Footer);
