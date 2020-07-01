import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";

import sound1 from "../../Samples/Planner.m4a";
import sound2 from "../../Samples/Mom's_Garden.m4a";
import sound3 from "../../Samples/Plant_Object_Angela.mp3";

const About = () => {
  let content = (
    <React.Fragment>
      <div className="page page--about flow">
        <h1 className="subtitle subtitle--about bold text--center">
          About Our Project
        </h1>
        <div className="about__content">
          <div className="contactinfo column">
            <div className="box_outside">
              <div className="box_content flow">
                <div className="box_title">Contact Info</div>
                <div className="contactinfo__email">
                  <div className="box_sub_title">Email:</div>
                  <a
                    href="mailto:groundedarchives@gmail.com?subject=Question"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    groundedarchives@gmail.com
                  </a>
                </div>
                <div className="contactInfo__number">
                  <div className="box_sub_title">Phone Number:</div>
                  <a classname="text" href="tel:314-312-3524">
                    (314) 312-3524
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="abouttext column flow">
            <p className="text--intro about_content">
              The enduring stories of global events are often found in the
              objects that are left behind: artifacts in museums, keepsakes
              passed down through families, houses that withstood war, famine,
              or plague.
            </p>
            <p className="text--intro about_content">
              Living in quarantine has forced many of us to find new meaning in
              the spaces we inhabit and the objects that surround us.
            </p>
            <p className="text--intro about_content">
              “Grounded: The Pandemic Archive” is our effort to assemble a
              living archive of the objects that tell our stories. Through this
              project, we invite you to find and preserve an object that holds a
              piece of your story, and add your voice to history.
            </p>
          </div>
        </div>
      </div>
      <div className="page page--about page--about--example flow">
        <h1 className="subtitle subtitle--about bold text--center">
          Example Submissions
        </h1>
        <div className="example_back">
          <div className="audioPlayer">
            <div className="header__title header__title--sample">Planner</div>
            <div className="imageCrop">
              <img
                src="Picture1.png"
                alt="A floral planner"
                className="audioimage"
                id="plannerpic"
              ></img>
            </div>

            <div className="audioControls">
              <audio controls>
                <source src={sound1} id="planner"></source>
              </audio>
            </div>
          </div>
          <div className="audioPlayer">
            <div className="header__title header__title--sample">
              Mom's Garden
            </div>

            <div className="imageCrop">
              <img
                src="Picture2.png"
                alt="An 8x8 garden box"
                className="audioimage"
                id="gardenpic"
              ></img>
            </div>
            <div className="audioControls">
              <audio controls>
                <source src={sound2} id="garden"></source>
              </audio>
            </div>
          </div>
          <div className="audioPlayer">
            <div className="header__title header__title--sample">Plant</div>

            <div className="imageCrop">
              <img
                src="Picture3.png"
                alt="A succulent plant"
                className="audioimage"
                id="cactuspic"
              ></img>
            </div>
            <div className="audioControls">
              <audio controls>
                <source src={sound3} id="plant"></source>
              </audio>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  return content;
};

export default React.memo(About);
