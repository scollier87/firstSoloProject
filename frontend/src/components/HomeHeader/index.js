import './HomeHeader.css'
import {NavLink} from 'react-router-dom'
// import ProfileButton from '../Navigation/ProfileButton';
import {useSelector} from 'react-redux'

function Homeheader() {

    const sessionUser = useSelector(state => state.session.user);
    // const sessionLinks = (
    //     <ProfileButton user={sessionUser} />
    //   );

    return(
        <div className="homeHeader">
            {/* <NavLink className="addSpot" exact to='/new'>add spot</NavLink> */}
            <div className="searchBar"></div>
            <div className="logOut"></div>
            <NavLink className="myBookings" to='/bookings'>My Bookings</NavLink>
            <NavLink className="createNewSpot" to='/new'>Create new spot</NavLink>

        </div>

    )
}

export default Homeheader;