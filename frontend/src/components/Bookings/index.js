import './Bookings.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSpots } from '../../store/spots'
import { getBookings } from '../../store/bookings'
import { NavLink, useHistory } from "react-router-dom";
import { useParams } from 'react-router';
import { createSpot } from '../../store/spots'
import {getImages} from'../../store/images'
import { createBooking } from '../../store/bookings'

function Bookings() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
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

    const [spotId, setSpotId] = useState('');
    const [userId, setUserId] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [gameSize, setGameSize] = useState('');

    const updateSpotId = (e) => setSpotId(e.target.value);
    const updateUserId = (e) => setUserId(e.target.value);
    const updateStartDate = (e) => setStartDate(e.target.value);
    const updateEndDate = (e) => setEndDate(e.target.value);
    const updateGameSize = (e) => setGameSize(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            spotId: +id,
            userId: sessionUser.id,
            startDate,
            endDate,
            gameSize,
        }

        const booking = await dispatch(createBooking(payload))
            if(booking) {
                history.push(`/home`)
            }
    }
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
        // dispatch(getBookings());
    }, [dispatch]);


    return (
        <div>
            <div className="bookingsImageBackground">
                <img src={oneImage?.url}  alt={oneImage?.id} className="bookingsBackground"/>
            </div>
            <div className="bookingsPageDiv">
                <NavLink className="homeBookingsButton" exact to='/home'>Home</NavLink>
                <div className="bookingsBorder">
                    <div className="courtName">{individualSpot?.name}</div>
                    <div className="courtAddress">{individualSpot?.address}</div>
                    <div className="courtCity">{individualSpot?.city}</div>
                    <div className="courtState">{individualSpot?.state}</div>
                    <div className="courtCountry">{individualSpot?.country}</div>

                    {/* <img className="bookingBa"></img> */}
                </div>
                <div className="bookingFormBox">
                    <form onSubmit={handleSubmit} action=" " method="post" className="form">

                        {/* <label className="bookingFormLabel" for="name" >Enter your name:</label>
                        <input type = "text" required className="bookingFormInput"></input> */}

                        <label className="bookingFormLabel">Time you want to play:</label>
                        <input type="datetime-local"
                            value={startDate} onChange={updateStartDate}
                            min="2018-06-07T00:00"
                            max="2022-06-14T00:00"
                            className="bookingFormInput"></input>

                        <label className="bookingFormLabel">Time you want to stop:</label>
                        <input type="datetime-local"
                            value={endDate} onChange={updateEndDate}
                            min="2018-06-07T00:00"
                            max="2022-06-14T00:00"
                            className="bookingFormInput"></input>

                        <label className="bookingFormLabel">How many people are coming?</label>
                        <input value={gameSize} onChange={updateGameSize} type="text" required className="bookingFormInput"></input>

                        <button type="submit" className="bookingFormInputButton">Game On!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}







export default Bookings;