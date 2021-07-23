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
import Bookings from "./components/Bookings";
// import Spots from "./components/Spots";
import AddNewSpotForm from "./components/AddNewSpotForm"

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
            <Route path="/spots/:id">
              <Bookings/>
            </Route>
            {/* <Route path="/spots/:id">
              <Spots/>
            </Route> */}
            <Route path='/new'>
              <AddNewSpotForm/>
            </Route>
          </Switch>
      )}
      </div>
    </>
  );
}

export default App;
