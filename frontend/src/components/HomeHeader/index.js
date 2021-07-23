import './HomeHeader.css'
import {NavLink} from 'react-router-dom'

function Homeheader() {
    return(
        <div className="homeHeader">
            {/* <NavLink className="addSpot" exact to='/new'>add spot</NavLink> */}
            <div className="profilePic"></div>
            <div className="searchBar"></div>
            <div className="logOut"></div>
            <NavLink className="myBookings" to='/bookings'>My Bookings</NavLink>

        </div>

    )
}

export default Homeheader;