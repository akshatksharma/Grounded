import React, { useRef, useEffect } from "react";
import "./Modal.css";

const Modal = ({ hide, title, body }) => {
  const node = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) return;
    else hide();
  };

  let content = (
    <div className="modal">
      <div className="modal__content flow" ref={node}>
        <div className="modal__header">
          <div className="close" onClick={() => hide()}>
            <svg
              className="close__button close__button--login"
              viewBox=" 0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                fill="inherit"
                points="11.649 9.882 18.262 3.267 16.495 1.5 9.881 8.114 3.267 1.5 1.5 3.267 8.114 9.883 1.5 16.497 3.267 18.264 9.881 11.65 16.495 18.264 18.262 16.497"
              ></polygon>
            </svg>
          </div>
          <h2 className="header__title">{title}</h2>
        </div>
        <div className="modal__body">{body}</div>
      </div>
    </div>
  );
  return content;
};

export default Modal;