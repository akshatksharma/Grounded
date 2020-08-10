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
    formData.set(type, data);
  };

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
                <Footer />
              </Route>
              <Route exact path="/">
                <Navbar />
                <main>
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
                </main>
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
