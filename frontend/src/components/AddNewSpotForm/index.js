import './AddNewSpotForm.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createSpot } from '../../store/spots'
import { NavLink } from 'react-router-dom'
// import e from 'express'

function AddNewSpotForm(){
    const dispatch = useDispatch();
    const history = useHistory();

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
            userId,
            address,
            city,
            state,
            country,
            lat,
            lng,
            name,
        }

    const spot = await dispatch(createSpot(payload))
        if(spot) {
            history.push(`./spots/${spot.id}`);
        }
    }

    return (
        <div className="addFormBackground">
            <NavLink className="homeAddFormButton" exact to='/home'>My Page</NavLink>
            <form onSubmit={handleSubmit} className="addNewSpotForm">
                <label className="addFormLabel">User</label>
                <input value={userId} onChange={updateUserId} className="addFormInput"></input>

                <label className="addFormLabel">Address</label>
                <input value={address} onChange={updateAddress} className="addFormInput"></input>

                <label className="addFormLabel">City</label>
                <input value={city} onChange={updateCity} className="addFormInput"></input>

                <label className="addFormLabel">State</label>
                <input value={state} onChange={updateState} className="addFormInput"></input>

                <label className="addFormLabel">Country</label>
                <input value={country} onChange={updateCountry} className="addFormInput"></input>

                <label className="addFormLabel">Latitude</label>
                <input value={lat} onChange={updateLat} className="addFormInput"></input>

                <label className="addFormLabel">Longitude</label>
                <input value={lng} onChange={updateLng} className="addFormInput"></input>

                <label className="addFormLabel">Name of Court</label>
                <input value={name} onChange={updateName} className="addFormInput"></input>

                <button type="submit" className="addFormButton">Add Court</button>
            </form>
        </div>
    )
}

export default AddNewSpotForm;