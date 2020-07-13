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
                <div className="contactinfo__number">
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
              objects left behind. Artifacts and keepsakes help us connect to
              our own histories and those of others.
            </p>
            <p className="text--intro about_content">
              "Grounded: The Pandemic Archive" is our effort to assemble the
              objects that tell our stories. When the virus arrived, flights
              were grounded, young people were grounded with their parents, and
              many of the elderly were grounded by fear. At the same time, we
              have found ways to ground ourselves through self-care, by
              embracing or enhancing the physical space around us, or by
              becoming more "grounded" in our mindset and outlook.
            </p>
            <p className="text--intro about_content">
              Through this collective project, we invite you to find and
              preserve an object that captures part of this spectrum of
              experience. What does "Grounded" mean to you?
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
            <div className="imageCrop">
              <img
                src="Picture1.png"
                alt="A small planning notebook with a floral design on its cover. It is resting on a wodden table and is being seen from above."
                className="audioimage"
                id="plannerpic"
                title="Planning Notebook"
              ></img>
            </div>

            <div className="audioControls">
              <audio controls>
                <source src={sound1} id="planner"></source>
              </audio>
            </div>
          </div>
          <div className="audioPlayer">
            <div className="imageCrop">
              <img
                src="Picture2.png"
                alt="A picture of a garden from above on a bright, sunny day. There is a 8 foot by 8 foot garden box with various plantlife including flowers and different vegetables.  "
                className="audioimage"
                id="gardenpic"
                title="Garden box"
              ></img>
            </div>
            <div className="audioControls">
              <audio controls>
                <source src={sound2} id="garden"></source>
              </audio>
            </div>
          </div>
          <div className="audioPlayer">
            <div className="imageCrop">
              <img
                src="Picture3.png"
                alt="A shot of a small plant in a green pot pot. It has spikes and thorns on its main stem coming from the ground. "
                className="audioimage"
                id="cactuspic"
                title="Cactus plant"
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
