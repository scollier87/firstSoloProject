import "./LandingPage.css";
import {NavLink} from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";
import { login } from '../../store/session'



function LandingPage() {
   const sessionLinks = (
        <>
          <LoginFormModal />
            {/* <div> */}
            {/* </div>
            <div> */}
                {/* <NavLink className="homeBttn" exact to="/">Home</NavLink> */}
            {/* </div> */}


        </>
      );

      const demoUserLogin = () => {
        const demoUser = ['Demo-lition', 'password']
        console.log(demoUser)
        dispatch(login(demoUser));
      }

    return (
        <div className="background">
            <div className="backgroundLayer2"></div>
            <div className="backgroundLayer3"></div>
            <div className="splashHeader">{sessionLinks}
            <button className='demoBtn' onClick={(() => demoUserLogin())}>Demo User</button>
            <NavLink className="splashSignUpBtn" to="/signup">Sign Up</NavLink>
            </div>
            <h1>Gamin' 4 Hoops</h1>
        </div>
    )
}


export default LandingPage;