import React, { useRef, useEffect } from "react";
import { isMobile } from "react-device-detect";
import "./Modal.css";

const Modal = ({ hide, bkg, title, body, style = {} }) => {
  const node = useRef(null);
  const closeButton = useRef(null);

  const handleClick = (e) => {
    if (node.current.contains(e.target)) return;
    else hide();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  let content = (
    <div className={bkg ? "modal" : "modal modal--nobkg"}>
      <div
        className={
          isMobile
            ? "modal__content modal__content--mobile flow"
            : "modal__content flow"
        }
        style={style.body}
        role="alertdialog"
        aria-modal
        tabIndex="0"
        ref={node}
      >
        <div className="modal__header">
          <button
            className="close"
            ref={closeButton}
            onClick={() => hide()}
            aria-label="Close dialog"
            tabIndex="0"
          >
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
          </button>
          <div className="header__text">
            <h2 style={style.title} className="header__title">
              {title}
            </h2>
            <div className="header__background"></div>
          </div>
        </div>
        <div className="modal__body">{body}</div>
      </div>
    </div>
  );
  return content;
};

export default Modal;
