import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Component/Home/HomePage";
import AboutPage from "./Component/About/AboutPage";
import { Project } from "./Component/Project/Project";
import { ContactPage } from "./Component/Contact/ContactPage";
import { Skills } from "./Component/Skills/Skills";


const App = () => {

  const [showMediaIcons, setShowMediaIcons] = useState(false);

  const handleMenu = () => {
    setShowMediaIcons(false);
  }


  return (
    <Switch>
      <Route exact path="/">
        <Home handleMenu={handleMenu} showMediaIcons={showMediaIcons} />
      </Route>
      <Route exact path="/home">
        <Home handleMenu={handleMenu} showMediaIcons={showMediaIcons} />
      </Route>

      <Route path="/about">
        <AboutPage handleMenu={handleMenu} showMediaIcons={showMediaIcons} />
      </Route>

      <Route path="/projects">
        <Project handleMenu={handleMenu} showMediaIcons={showMediaIcons} />
      </Route>

      <Route path="/contact">
        <ContactPage handleMenu={handleMenu} showMediaIcons={showMediaIcons} />
      </Route>
      <Route path="/skills">
        <Skills handleMenu={handleMenu} showMediaIcons={showMediaIcons} />
      </Route>
    </Switch>
  );
};

export default App;