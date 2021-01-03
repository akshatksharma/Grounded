import React from "react";
import { Link } from "react-router-dom";
import "./FAQ.css";

// FAQ
// React component for the FAQ page. Simply returns the content of the page as JSX.

const FAQ = () => {
  let content = (
    <React.Fragment>
      <div className="page page--about flow">
        <h1 className="subtitle subtitle--about bold text--center">
          FAQ
        </h1>
        <div className="about__content">
          <div className="abouttext flow">
            <p className="text--intro about_content question">
              Q: What if I can’t think of an object?
            </p>
            <p className="text--intro about_content">
              A: You don’t have to think of something right away. Take a few hours or a few days to think of an object.

              If nothing comes to mind, take a look around your room (or the rooms you typically occupy) and see what stands out. If not, don’t feel constrained - this doesn’t need to be an object. It can be anything (a room, a smell, a sound, a memory connected to a certain item) that has gained or lost meaning to you since the pandemic began.

              On the “contribute’ page, you can view a handful of guiding questions to help you think about which object you’d like to highlight.
            </p>
            <p className="text--intro about_content question">
            Q: What if I am unable to record myself speaking? 
            </p>
            <p className="text--intro about_content">
            A: You can tell your story through text instead of audio. Just check the box under the record button.  

However, we would love for you to record yourself if you are able. Every voice has a unique cadence. The natural pauses of speech as we search for the right words to add to the authenticity and intimacy of your storytelling.  

If you feel awkward or uncomfortable recording alone, you are welcome to invite others to be a part of your recording – for example,  a family member who is asking you questions or a friend who is reflecting with you.  
            </p>
            <p className="text--intro about_content question">
            Q: How will my submission be used?  
            </p>
            <p className="text--intro about_content">
            A: We hope to use this archive to ask research questions about the pandemic experience and design an online art installation that offers a new perspective on this unsettled time, featuring the stories anonymously. We will keep you updated via email on when your submissions will be displayed. 
            </p>
            <p className="text--intro about_content question">
            Q: Why should I contribute to this archive? 
            </p>
            <p className="text--intro about_content">
            A: Your story is an important part of history and will allow us to capture the collective memory of this time. 

The submission process encourages you to explore the spectrum of experiences and feelings you may have endured since the pandemic began, and it might even help you find some peace or clarity.  
            </p>
            <p className="text--intro about_content question">
           Q: Why was this project created? 
            </p>
            <p className="text--intro about_content">
            A: As impassioned storytellers and designers, we want to provide a space for the narratives of COVID-19, racial injustice, financial unrest, political turmoil, etc. to coexist and interact. During these novel times, we wish to document history in the making, and this digital archive of our stories was the result. 

We want to explore a new way of storytelling: through voice and images. An individual voice has its own tone and pitch, and it is richer in meaning than a written paragraph. With some natural pauses and the occasional struggle to find the right word, it is imperfect, and thus intimate and authentic. With audio and visuals, we wish to capture the uniqueness of individual experience with authenticity. 
            </p>

          </div>
        </div>
      </div>
      <div className="page page--about page--about--example flow">
        <div style={{ margin: "40px auto" }}>
          <p className="text">
            Don’t forget to contribute your story <Link to="/">here</Link>.
            </p>
        </div>
      </div>
    </React.Fragment>
  );
  return content;
};

export default React.memo(FAQ);
