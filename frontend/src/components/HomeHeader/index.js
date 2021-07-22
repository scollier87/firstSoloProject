import './HomeHeader.css'
import {NavLink} from 'react-router-dom'

function Homeheader() {
    return(
        <div className="homeHeader">
            <div className="profilePic"></div>
            <div className="searchBar"></div>
            <div className="logOut"></div>
            <NavLink className="myBookings" to='/bookings'>Booking</NavLink>
        </div>
    )
}

export default Homeheader;