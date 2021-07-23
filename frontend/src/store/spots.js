import { csrfFetch } from "./csrf"
const SET_SPOTS = 'spots/setSpots'
const ONE_SPOT  = 'spots/getOneSpot'
const CREATE_SPOT = 'spots/createOneSpot'



const setSpots = (spots) => ({
    type: SET_SPOTS,
    spots,
})

const oneSpot = (spot) => ({
    type: ONE_SPOT,
    spot,
})

const createOneSpot = (spot) => ({
    type: CREATE_SPOT,
    spot,
})

export const getSpots = () => async (dispatch) => {
    const res = await fetch('/api/spots');
    const spots = await res.json();
    dispatch(setSpots(spots))
}

export const getOneSpot = (id) => async (dispatch) => {
    const res = await fetch (`/api/spots/${id}`);
    const spot = await res.json();
    dispatch(oneSpot(spot))
}

export const createSpot = data => async (dispatch) => {
    const response = await csrfFetch(`/api/spots`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    });

    if(response.ok) {
        const spot = await response.json();
        dispatch(createOneSpot(spot));
        return spot;
    }
}

const initialState = {};

const spotsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SET_SPOTS:
            return { ...state, ...Object.fromEntries(action.spots.map((spot) =>[
                spot.id, spot])) };
        case CREATE_SPOT:
            if (!state[action.spot.id]){
                const newState = {
                    ...state,
                    [action.spot.id]: action.spot,
                };
                return newState;
            }
            default:
            return state;
    }
}

export default spotsReducer;