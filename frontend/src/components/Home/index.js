import './Home.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getSpots } from '../../store/spots';
import { getImages } from '../../store/images';
import { getOneSpot } from '../../store/spots'
import {Bookings} from '../Bookings';

function Home() {
    const dispatch = useDispatch();
    const spots = useSelector((state) => Object.values(state.spots));
    const images = useSelector((state) => Object.values(state.images));
    const spot = useSelector((state) => Object.values(state.spots));

    const sessionUser = useSelector(state => state.session.user);

    // const sessionLinks = (
    //     <ProfileButton user={sessionUser} />
    //   );

    // console.log(spots)

    useEffect(() => {
        dispatch(getImages());
        dispatch(getSpots());
    }, [dispatch]);

    const filteredSpots = spots.filter(spot => spot.userId === sessionUser.id);

    // console.log(filteredSpots)

    // useEffect(() => {
    //     dispatch(getOneSpot());
    // }, [dispatch]);
    return (
        <div className="background4">
            <div className="myCreatedCourts">My Courts
                <div>
                    {filteredSpots.map((spot) =>
                        <div>
                            <li>{spot.name}</li>
                            <a href={`/edit/${spot.id}`}>Edit</a>
                        </div>
                    )}
                </div>
        </div>
            {/* <div className="myBookings1">My Bookings</div> */}
            <NavLink className="homeButton" exact to='/'>Home</NavLink>
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