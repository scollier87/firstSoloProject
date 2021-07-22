import './Bookings.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOneSpot } from '../../store/spots'
import { getBookings } from '../../store/bookings'
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router';

function Bookings() {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => Object.values(state.bookings));
    const spots = useSelector((state) => Object.values(state.spots));
    const { id } = useParams()
    // useEffect(() => {
    //     dispatch(getBookings());
    // }, [dispatch]);
    console.log(spots);
    useEffect(() => {
        dispatch(getOneSpot(id));
    }, [dispatch])

    return (
        <div className="background5">
            {/* <h1>bookings</h1> */}
            {spots.map((spot) =>
                <h1>{spot.name}</h1>
            )}

            <div>Bookings</div>
                <NavLink className="homeButton" exact to='/'>Home</NavLink>
        </div>
    )
}







export default Bookings;