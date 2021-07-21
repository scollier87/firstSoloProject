import './Home.css'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfileButton from '../Navigation/ProfileButton';

import { getSpots } from '../../store/spots'

function Home() {
    const dispatch = useDispatch();
    const spots = useSelector((state) => Object.values(state.spots));

    const sessionUser = useSelector(state => state.session.user);
    const sessionLinks = (
        <ProfileButton user={sessionUser} />
      );

    useEffect(() => {
        dispatch(getSpots());
    }, [dispatch]);

    return (
        <div className="background4">
        <NavLink className="homeButton" exact to='/'>Home</NavLink>
        <div className="profileDropdown">{sessionLinks}</div>
        <div className="spotSlider">
            <div className="sliderBtnLeft">
            <div className="sliderBtnRight">
            <div className="spotSliderImg">
                {spots.map((spot) => ([spot]))}
                <div className="spotSliderReview">
                </div>
                </div>
            </div>

            </div>
        </div>
        </div>
    )
}

export default Home;