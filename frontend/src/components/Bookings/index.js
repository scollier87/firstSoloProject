import './Bookings.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpots } from '../../store/spots'
import { getBookings } from '../../store/bookings'
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router';
import { createSpot } from '../../store/spots'

function Bookings() {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => Object.values(state.bookings));
    const spots = useSelector((state) => Object.values(state.spots));
    const { id } = useParams() //method using a .find comparing the two ids useParams id ===
    // console.log("spots", spots)
    
    const individualSpot = spots.find((spot) => {
        return +id === spot.id
        // return spot.name === "Venice Beach Basketball Courts"
    })

    // console.log(individualSpot)
    // console.log("spots", spots)

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
        <div>
            <NavLink className="homeButton" exact to='/'>Home</NavLink>
            <div>
                <div className="courtName">{individualSpot?.name}</div>
            </div>
            <form action=" " method="get" className="form">
                <label for="name">Enter your name:</label>
                <input type = "text" name="name" id="name" required></input>
                <label for="meeting-time">Time you want to play:</label>
                <input type="datetime-local" id="meeting-time"
                    name="meeting-time" value="2022-06-12T19:30"
                    min="2018-06-07T00:00" max="2022-06-14T00:00"></input>
                <label for="game size">How many people are coming?</label>
                <input type="text" name="name" id="name" required></input>
            </form>
            <input type="submit" value="Game On!"></input>
        </div>
    )
}







export default Bookings;