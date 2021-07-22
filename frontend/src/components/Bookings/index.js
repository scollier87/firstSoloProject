import './Bookings.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpots } from '../../store/spots'
import { getBookings } from '../../store/bookings'
import { NavLink } from "react-router-dom";

function Bookings() {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => Object.values(state.bookings));


    useEffect(() => {
        dispatch(getBookings());
    }, [dispatch]);

    return (
        <div className="background5">
            <div>Bookings</div>
                <NavLink className="homeButton" exact to='/'>Home</NavLink>
        </div>
    )
}







export default Bookings;