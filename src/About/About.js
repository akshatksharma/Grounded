import React from "react";
import Navbar from "./Navbar/Navbar.js";
import "./About.css";

const About = () => {
  let content = (
    <Navbar />
      <div className="page page--intro flow">
        <div className="row">
          <div className="column">
            <h1 className="title">About Our Project</h1>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="box_outside">
              <div className="box_content">
                <div className="box_title">
                  Contact Info:
             </div>
                <div className="box_sub_title">
                  Email:
             </div>
                <div className="text">
                  groundedarchives@gmail.com
             </div>
                <div className="box_sub_title">
                  Phone Number:
             </div>
                <div className="text">
                  (314) 312-3524
             </div>
              </div>
            </div>
          </div>
          <div className="column">
            <p className="text about_content">
              The enduring stories of global events are often found in the objects that are left behind: artifacts
                in museums, keepsakes passed down through families, houses that withstood war, famine, or plague.</p><br></br>
            <p className="text about_content">Living in quarantine has forced many of us to find new meaning in the spaces we inhabit and the objects that surround us.</p><br></br>
            <p className="text about_content">“Grounded: The Pandemic Archive” is our effort to assemble a living archive of the objects that tell our stories.
            Through this project, we invite you to find and preserve an object that holds a piece of your story,
                and add your voice to history.</p>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="example_back">
              <h1 className="example_title">Example Submissions</h1>
            </div>
          </div>
        </div>
      </div>
    );

    return content;
  };

  export default About;
