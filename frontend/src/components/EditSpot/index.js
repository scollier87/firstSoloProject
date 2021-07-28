import './EditSpot.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createSpot, updateSpot, removeSpot } from '../../store/spots'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import { getSpots } from '../../store/spots'

function EditSpot(){
    const spot = useSelector(state => state.spots[spot.id]);

    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams()
    const spots = useSelector((state) => Object.values(state.spots))
    const sessionUser = useSelector(state => state.session.user);

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

    const spotUpdate = await dispatch(updateSpot(payload))
        if(spotUpdate) {
            history.push(`./spots/${spot.id}`);
        }
    }

    const handleDelete = () => {
        dispatch(removeSpot(spot.id))
    }

    useEffect(() => {
        dispatch(getSpots())
    }, [dispatch])

    const filteredSpots = spots.filter(spot => spot.userId === sessionUser.id);
    console.log(filteredSpots)
    return (
        <div className="updateMySpot">
            <NavLink className="homeFormButton" exact to='/home'>Home</NavLink>
            <form onSubmit={handleSubmit}>
                <div className="updateForms">
                    <label className="updateFormLabel">User</label>
                    <input value={userId} onChange={updateUserId} className="updateFormInput"></input>

                    <label className="updateFormLabel">Address</label>
                    <input value={address} onChange={updateAddress} className="updateFormInput"></input>

                    <label className="updateFormLabel">City</label>
                    <input value={city} onChange={updateCity} className="updateFormInput"></input>

                    <label className="updateFormLabel">State</label>
                    <input value={state} onChange={updateState} className="updateFormInput"></input>

                    <label className="updateFormLabel">Country</label>
                    <input value={country} onChange={updateCountry} className="updateFormInput"></input>

                    <label className="updateFormLabel">Lat</label>
                    <input value={lat} onChange={updateLat} className="updateFormInput"></input>

                    <label className="updateFormLabel">Lng</label>
                    <input value={lng} onChange={updateLng} className="updateFormInput"></input>

                    <label className="updateFormLabel">Name</label>
                    <input value={name} onChange={updateName} className="updateFormInput"></input>

                    <button type="submit"> Update
                        {/* <a href='/home'>Update</a> */}
                    </button>
                    {/* {sessionUser?.id === spot?.userId &&} */}
                    <button onClick={handleDelete}>Delete</button>

                </div>
            </form>
            {/* {filteredSpots.map((spot) =>
                <div className="editSpotsCurrent">
                    <li>{spot.address}</li>
                    <li>{spot.city}</li>
                    <li>{spot.state}</li>
                    <li>{spot.country}</li>
                    <li>{spot.lat}</li>
                    <li>{spot.lng}</li>
                    <li>{spot.name}</li>
                </div> */}
            )

        </div>

    )
}

export default EditSpot;