import './Home.css'
import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getSpots } from '../../store/spots';
import { getImages } from '../../store/images';
import { getOneSpot } from '../../store/spots'
import { getBookings } from '../../store/bookings';
import BookingFormModal from '../EditBooking'

function Home() {
    const dispatch = useDispatch();
    const spots = useSelector((state) => Object.values(state.spots));
    const images = useSelector((state) => Object.values(state.images));
    const spot = useSelector((state) => Object.values(state.spots));
    const bookings = useSelector((state) => Object.values(state.bookings));

    const sessionUser = useSelector(state => state.session.user);

    // const sessionLinks = (
    //     <ProfileButton user={sessionUser} />
    //   );


    useEffect(() => {
        dispatch(getImages());
        dispatch(getSpots());
        dispatch(getBookings());
    }, [dispatch]);

    const filteredSpots = spots.filter(spot => spot.userId === sessionUser?.id);
    const filteredBookings = bookings.filter(booking => booking.userId === sessionUser?.id)
    // useEffect(() => {
    //     dispatch(getOneSpot());
    // }, [dispatch]);
    return (
        <div className="background4">
            <div className="myCreatedCourts">My Courts
                <div>
                    {filteredSpots.map((spot) =>
                        <div>
                            <li className="createdCourtSpots">{spot.name}</li>
                            <Link to={`/edit/${spot.id}`} className="createdCourtEditBtn"><img src="https://img.icons8.com/office/16/000000/edit.png"/></Link>
                        </div>
                    )}
                </div>
            </div>
            <div className="myBookings1">My Bookings
                <div>
                    {filteredBookings?.map((booking) => (
                        <div>
                            <h3>{booking.Spot?.name}</h3>
                            <p>{booking?.startDate}</p>
                            <p>Number of People? {booking?.gameSize}</p>
                            <a><BookingFormModal booking={booking}/></a>
                            {/* <Link to={`/spots/${booking.spotId}`}>Edit</Link> */}
                        </div>
                    ))}
                </div>
            </div>
            {/* <NavLink className="homeButton" exact to='/'>Home</NavLink> */}
            {/* <div className="profileDropdown">{sessionLinks}</div> */}
            <div className="spotSlider">
                {images.map((image) =>
                    <div>
                        <NavLink className="spotInfo" exact to={`/spots/${image.spotId}`}>
                        <img src={image.url} className="spotSliderImg"></img>
                        </NavLink>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Home;