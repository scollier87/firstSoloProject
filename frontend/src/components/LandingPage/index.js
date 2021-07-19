import "./LandingPage.css";
import {NavLink} from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";



function LandingPage() {
   const sessionLinks = (
        <>
          <LoginFormModal />
            {/* <div> */}
                <NavLink className="signUp" to="/signup">Sign Up</NavLink>
            {/* </div>
            <div> */}
                <NavLink className="homeBttn" exact to="/">Home</NavLink>
            {/* </div> */}


        </>
      );
    return (
        <div className="background">
            <div className="backgroundLayer2"></div>
            <div className="backgroundLayer3"></div>
            <div>{sessionLinks}</div>
            <h1>Gamin' 4 Hoops</h1>
        </div>
    )
}


export default LandingPage;