import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

import picture1 from "./Picture1.png";
import picture2 from "./Picture2.png";
import picture3 from "./Picture3.png";
import sound1 from "../../Samples/Planner.m4a";
import sound2 from "../../Samples/Mom's_Garden.m4a";
import sound3 from "../../Samples/Plant_Object_Angela.mp3";

// About
// React component for the About page. Simply returns the content of the page as JSX. Includes section with sample stories, so imported pictures/sounds above


const About = () => {
  let content = (
    <React.Fragment>
      <div className="page page--about flow">
        <h1 className="subtitle subtitle--about bold text--center">
          About Our Project
        </h1>
        <div className="about__content">
          <div className="contactinfo">
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
          <div className="abouttext flow">
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
            <p className="text--intro about_content">
              We are a group of undergrads and medical school students from
              Washington University in St. Louis. In the future, we hope to use
              this archive to ask research questions about the pandemic
              experience and design an art installation that offers a new
              perspective on this unsettled time. If you are interested in
              learning more about the project, or have questions about how it
              works or why we’re engaging in this work, please reach out to us.
              We will keep you updated via email on when your submissions will
              be displayed!
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
                src={picture1}
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
                src={picture2}
                alt="A garden from above on a bright, sunny day. There is a 8 foot by 8 foot garden box with various plantlife including flowers and different vegetables.  "
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
                src={picture3}
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
          <div style={{ margin: "40px auto" }}>
            <p className="text">
              Don’t forget to contribute your story <Link to="/">here</Link>.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
  return content;
};

export default React.memo(About);
