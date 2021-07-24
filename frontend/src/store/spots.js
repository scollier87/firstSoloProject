import { csrfFetch } from "./csrf"
const SET_SPOTS = 'spots/setSpots'
const ONE_SPOT  = 'spots/getOneSpot'
const CREATE_SPOT = 'spots/createOneSpot'
const UPDATE_SPOT = 'spots/updateOneSpot'
const REMOVE_SPOT = 'spots/removeOneSpot'



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

const updateOneSpot = (spot) => ({
    type: UPDATE_SPOT,
    spot,
})

const removeOneSpot = (spot) => ({
    type: REMOVE_SPOT,
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

export const updateSpot = data => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const spot = await response.json();
        dispatch(updateOneSpot(spot));
        return spot;
    }
}

export const removeSpot = data => async (dispatch) => {
    const response = await csrfFetch(`/api/spots/${data.id}`, {
        method: 'delete',
    })
    if(response.ok) {
        dispatch(removeOneSpot(dataId))
    }
    return response;
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
            case UPDATE_SPOT: {
            return {
                ...state,
                [action.spot.id]: action.spot,
                };
            }
            case REMOVE_SPOT: {
                const newState = { ...state };
                delete newState[action.spotId];
                return newState;
            }
            default:
            return state;
    }
}

export default spotsReducer;