import React from "react";
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

const App = () => {
  let formData = new FormData();

  const updateData = (items) => {
    const [type, data] = items;
    console.log(typeof data);
    formData.set(type, data);
  };

  const submit = () => {
    console.log("printing formData...");
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    // submit formdata here

    // clear it at the end

    formData = new FormData();
  };

  let location = useLocation();

  let content = (
    <React.Fragment>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 1000, exit: 800 }}
          classNames={"fade"}
        >
          <section className="route-section">
            <Switch>
              <Route exact path="/about">
                <Navbar />
                <About />
                <Footer />
              </Route>
              <Route exact path="/thank">
                <Navbar />
                <Thank />
              </Route>
              <Route exact path="/">
                <Navbar />
                <Intropage />
                <Fade>
                  <Objectpage updateData={updateData} />
                </Fade>
                <Fade>
                  <Storypage updateData={updateData} />
                </Fade>
                <Fade>
                  <Emailpage updateData={updateData} submit={submit} />
                </Fade>
                <Footer />
              </Route>
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
  return content;
};

export default App;
