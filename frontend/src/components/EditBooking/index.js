import './EditBooking.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { updateBooking } from '../../store/bookings'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import { getBookings } from '../../store/bookings'

function EditBooking(){
    const { id } = useParams()
    const bookings = useSelector((state) => Object.values(state.bookings));
    const booking = bookings.find(booking => booking.id === +id);
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);

    const [userId, setUserId] = useState('');
    const [spotId, setSpotId] = useState('');
    const [startDate, setStartDate] =  useState('');
    const [endDate, setEndDate] = useState('');
    const [gameSize, setGameSize] = useState('');

    useEffect(() => {
        setUserId(booking?.userId)
        setSpotId(booking?.spotId)
        setStartDate(booking?.startDate)
        setEndDate(booking?.endDate)
        setGameSize(booking?.gameSize)
    }, [booking])

        const updateUserId = (e) => setUserId(e.target.value);
        const updateSpotId = (e) => setSpotId(e.target.value);
        const updateStartDate = (e) => setStartDate(e.target.value);
        const updateEndDate = (e) => setEndDate(e.target.value);
        const updateGameSize = (e) => setGameSize(e.target.value;)

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
            spotId: booking?.spotId,
            userId: booking?.userId,
            startDate,
            endDate: booking?.endDate,
            gameSize,
        }

        const bookingUpdate = await dispatch(updateBooking(payload))
            if (bookingUpdate) {
                history.push(`/home`);
            }
    }

    userEffect(() => {
        dispatch(getBookings())
    }, [dispatch])

    const filteredBookings = bookings.filter(booking => booking.userId === sessionUser.id);
    console.log(filteredBookings)

    return (
        <div className="updateMyBooking">
            <NavLink className="updateBookingButton" exact to='/home'>Home</NavLink>
            <form onSubmit={handleSubmit}>
                <div className='updateBookingForms'>
                    <label className='updateBookingLabel'>Start Time</label>
                    <input value={startDate} defaultValue={booking?.startDate} onChange={updateStartDate} className='updateBookingInput'></input>

                    <label className='updateBookingLabel'>How many people are coming?</label>
                    <input value={gameSize} defaultValue={booking?.gameSize} onChange={updateGameSize}></input>

                    <a href='/home'><button type='submit'>Update</button></a>
                </div>
            </form>

        </div>
    )
}

export default EditBooking;
