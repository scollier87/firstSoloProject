// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Homeheader from "./components/HomeHeader";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      <div>
        {isLoaded && (
          <Switch>
            <Route path="/signup" >
              <SignupFormPage />
            </Route>
            <Route path="/" exact >
              <LandingPage/>
            </Route>
            <Route path="/home">
              <Home/>
              <Homeheader/>
            </Route>
          </Switch>
      )}
      </div>
    </>
  );
}

export default App;
