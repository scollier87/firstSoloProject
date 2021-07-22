import './Home.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfileButton from '../Navigation/ProfileButton';

import { getSpots } from '../../store/spots';
import { getImages } from '../../store/images';

function Home() {
    const dispatch = useDispatch();
    const spots = useSelector((state) => Object.values(state.spots));
    const images = useSelector((state) => Object.values(state.images));

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

    return (
        <div className="background4">
            <NavLink className="homeButton" exact to='/'>Home</NavLink>
            <div className="profileDropdown">{sessionLinks}</div>
            <div className="spotSlider">
                {images.map((image) =>
                    <img src={image.url} className="spotSliderImg"></img>

                )}
                    {spots.map((spot) => <h5>{spot.name}</h5>)}
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