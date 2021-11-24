import "./LandingPage.css";
import {NavLink, Redirect} from 'react-router-dom';
import LoginFormModal from "../LoginFormModal";
import { login } from '../../store/session'
import { useDispatch, useSelector } from "react-redux";



function LandingPage() {
   const dispatch = useDispatch()
   const sessionUser = useSelector(state => state.session.user)
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

      if(sessionUser) return (
        <Redirect to='/home'/>
      )

    return (
        <div className="background">
            <div className="backgroundLayer2"></div>
            <div className="backgroundLayer3"></div>
            <div className="splashHeader">{sessionLinks}
            <button className='demoBtn' onClick={(() => demoUserLogin())}>Demo User</button>
            <NavLink className="splashSignUpBtn" to="/signup">Sign Up</NavLink>
            </div>
            <h1>Gamin' 4 Hoops</h1>
            <div className='spl_Footer'>
            <a href='https://github.com/scollier87' target='_blank'><img className='spl_About' src="https://img.icons8.com/ios/50/000000/github--v1.png" alt="GithubImage"/></a>
            <h3>Created by Sean Collier</h3>
            <a href='https://www.linkedin.com/in/sean-collier-65b32412b/' target='_blank'><img className='spl_About' src="https://img.icons8.com/ios/50/000000/linkedin.png" alt="LinkedinImage"/></a>

            </div>
        </div>
    )
}


export default LandingPage;