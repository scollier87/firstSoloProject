import './EditSpot.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createSpot, updateSpot, removeSpot } from '../../store/spots'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router'

function EditSpot(){
    // const spot = useSelector(state => state.spots[spotId]);

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams()

    const [userId, setUserId] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [lat, setLat] = useState ('');
    const [lng, setLng] = useState ('');
    const [name, setName] = useState('');

    const updateUserId = (e) => setUserId(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value)
    const updateCountry = (e) => setCountry(e.target.value);
    const updateLat = (e) => setLat(e.target.value);
    const updateLng = (e) => setLng(e.target.value);
    const updateName = (e) => setName(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            id,
            userId: +userId,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
        }

    const spot = await dispatch(updateSpot(payload))
        if(spot) {
            history.push(`./spots/${spot.id}`);
        }
    }

    const handleDelete = () => {
        dispatch(removeSpot(spot.id))
    }

    return (
        <div>
            <NavLink className="homeButton" exact to='/home'>My Page</NavLink>
            <form onSubmit={handleSubmit}>
                <label>user</label>
                <input value={userId} onChange={updateUserId}></input>

                <label>address</label>
                <input value={address} onChange={updateAddress}></input>

                <label>city</label>
                <input value={city} onChange={updateCity}></input>

                <label>state</label>
                <input value={state} onChange={updateState}></input>

                <label>country</label>
                <input value={country} onChange={updateCountry}></input>

                <label>lat</label>
                <input value={lat} onChange={updateLat}></input>

                <label>lng</label>
                <input value={lng} onChange={updateLng}></input>

                <label>name</label>
                <input value={name} onChange={updateName}></input>

                <button type="submit">update spot</button>
                <button onClick={handleDelete}>delete spot</button>
            </form>
        </div>
    )
}

export default EditSpot;