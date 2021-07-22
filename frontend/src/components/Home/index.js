import './Home.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfileButton from '../Navigation/ProfileButton';

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

    const sessionLinks = (
        <ProfileButton user={sessionUser} />
      );

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getOneSpot());
    }, [dispatch]);
    return (
        <div className="background4">
            <NavLink className="homeButton" exact to='/'>Home</NavLink>
            <div className="profileDropdown">{sessionLinks}</div>
            <div className="spotSlider">
                {images.map((image) =>
                    <div>
                    <img src={image.url} className="spotSliderImg"></img>
                        <NavLink className="spotInfo" exact to={`/spots/${image.spotId}`}>spotInfo</NavLink>

                    </div>
                )}
                    {/* {spots.map((spot) => <h5>{spot.name}</h5>)} */}
            </div>
            {/* {spots.map((spot) =>
            <div className="spotSlider">
            </div>
            )} */}
                {/* <div className="sliderBtnLeft"></div>
                <div className="sliderBtnRight"></div> */}

        </div>
    )
}

export default Home;