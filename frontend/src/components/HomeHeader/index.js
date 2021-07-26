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
            <label className="searchBar">Search:</label>
            <input type="search" id="site-search" name="q"></input>
            <div className="logOut"></div>
            <NavLink className="myBookings" to='/bookings'>My Bookings</NavLink>
            <NavLink className="createNewSpot" to='/new'>Create Court</NavLink>

        </div>

    )
}

export default Homeheader;