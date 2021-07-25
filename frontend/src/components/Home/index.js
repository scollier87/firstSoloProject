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


    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(getOneSpot());
    // }, [dispatch]);
    return (
        <div className="background4">
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