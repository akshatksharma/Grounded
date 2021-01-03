import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Fade from "react-reveal/Fade";
import "./App.css";
import "./resetStyles.css";
import Navbar from "./Navbar/Navbar.js";
import About from "./Pages/Aboutpage/About.js";
import Intropage from "./Pages/Intropage/Intropage.js";
import Objectpage from "./Pages/Objectpage/Objectpage.js";
import Storypage from "./Pages/Storypage/Storypage.js";
import Emailpage from "./Pages/Emailpage/Emailpage.js";
import Footer from "./Footer/Footer.js";
import Thank from "./Pages/Thankpage/Thank.js";
import FAQ from "./Pages/FAQpage/FAQ.js";

/**
 * 
 * @description
 * 
 * App
 * The main "hub" for site. Handles routing to different pages via the React Router package. 
 * Also contains the central logic related to sending data to backend.   
 */


const App = () => {

  // ********* @State hidden: Boolean *********
  // Controls whether the popup for the Guiding Questions section is hidden or not. It is passed in as a prop to the Object page, so that a button press in it can trigger the modal to overlay the entire screen

  const [hidden, setHidden] = useState(false);

  // hidePage() : Function - sets the state of hidden

  let hidePage = () => {
    setHidden(!hidden);
  };

  // formData : Object
  // the core object that will be sent to the backend
  // it will encompass all of the data, such as text, audio blob, and image blobs

  let formData = new FormData();

  // updateData(): Function - Updates the formData object. Associates the data with the type of data it is
  //  @param items : [Any] - An array of length 2. First has the type of object, second has the object itself

  const updateData = (items) => {
    // type: String
    // data: Object
    const [type, data] = items;
    formData.set(type, data);
  };

  //  submit() : Function - submits the formData object to the backend via the fetch() API

  const submit = () => {
    // submit formdata here

    fetch("/submitForm", {
      method: "POST",
      headers: { enctype: "multipart/form-data" },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => err);

    // clear it at the end

    formData = new FormData();
  };

  // location -- used for the cool fade effect™️

  let location = useLocation();

  let content = (
    // Honestly, ignore the whole CSSTransition / TransitionGroup items; they are just for the fade effect
    <React.Fragment>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 1000, exit: 800 }}
          classNames={"fade"}
        >
          <div className="route-section">
            {/* This switch statement is how routing works. Each Route corresponds to a different URL (ex: /faq --> groundedarchive.org/faq */}
            {/* Each route has a Navbar and Footer, and some content in between */}
            {/* The content in between is in the /Pages folder in this repository. Look at the imports at the start of this file for more info */}
            <Switch>
              <Route exact path="/faq">
                {/* The FAQ page */}
                <Navbar />
                <FAQ />
                <Footer />
              </Route>
              <Route exact path="/about">
                {/* The about page */}
                <Navbar />
                <About />
                <Footer />
              </Route>
              <Route exact path="/thank">
                {/* The thank you page */}
                <Navbar />
                <Thank />
                <Footer />
              </Route>
              <Route exact path="/">
                {/* The home page */}
                <Navbar />
                <main>
                  {/* Page is composed of many sections */}
                  {/* Each section can be hidden based on the hidden state is == true. A hidden class is attached to do so. */}
                  {/* NOTE: <Fade/> objects are just for the Fade effect and can be ignored */}

                  <section className={"page__container"}>
                    {/* Intropage: React Component */}
                    <Intropage />
                  </section>
                  <section
                    className={
                      hidden ? "page__container hidden" : "page__container"
                    }
                  >
                    <Fade>
                      {/* Objectpage: React Component */}
                      {/* @prop updateData -- function that allows Objectpage to update the formData object here with image data  */}
                      {/* Section where users can upload their own images */}
                      <Objectpage
                        updateData={updateData}
                        setHidden={hidePage}
                      />
                    </Fade>
                  </section>
                  <section
                    className={
                      hidden ? "page__container hidden" : "page__container"
                    }
                  >
                    <Fade>
                      {/* Storypage: React Component  */}
                      {/* @prop updateData -- function that allows Storyage to update the formData object here with audio data or text data */}
                      {/* Section where users can upload their own audio or text */}
                      <Storypage updateData={updateData} />
                    </Fade>
                  </section>
                  <section
                    className={
                      hidden ? "page__container hidden" : "page__container"
                    }
                  >
                    <Fade>
                      {/* Emailpage: React Component */}
                      {/* @prop updateData -- function that allows Emailpage to update the formData object here with name and email info */}
                      {/* Section where users can put their names and emails */}
                      <Emailpage updateData={updateData} submit={submit} />
                    </Fade>
                  </section>
                </main>
                <Footer />
              </Route>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
  return content;
};

export default App;
