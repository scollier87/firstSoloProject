import './Bookings.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSpots } from '../../store/spots'
import { getBookings } from '../../store/bookings'
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router';
import { createSpot } from '../../store/spots'
import {getImages} from'../../store/images'

function Bookings() {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => Object.values(state.bookings));
    const spots = useSelector((state) => Object.values(state.spots));
    const images = useSelector((state) => Object.values(state.images));

    const { id } = useParams() //method using a .find comparing the two ids useParams id ===
    // console.log("spots", spots)

    const individualSpot = spots.find((spot) => {
        return +id === spot.id
        // return spot.name === "Venice Beach Basketball Courts"
    })

    const oneImage = images.find((image) =>{
        return +image.spotId === individualSpot.id
    })
    // console.log(oneImage)
    // console.log("images", images)
    // const citySpot = spots.find((spot) => {
    //     return +city === spot.city
    // })
    // console.log(individualSpot)
    // console.log("spots", spots)

    useEffect(() => {
        dispatch(getSpots());
        dispatch(getImages());
    }, [dispatch]);


    return (
        <div>
            <div className="bookingsImageBackground">
                <img src={oneImage?.url}  alt={oneImage?.id} className="bookingsBackground"/>
            </div>
                <NavLink className="homeButton" exact to='/home'>Home</NavLink>
                <div className="bookingsBorder">
                    <div className="courtName">{individualSpot?.name}</div>
                    <div className="courtAddress">{individualSpot?.address}</div>
                    <div className="courtCity">{individualSpot?.city}</div>
                    <div className="courtState">{individualSpot?.state}</div>
                    <div className="courtCountry">{individualSpot?.country}</div>

                    {/* <img className="bookingBa"></img> */}
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