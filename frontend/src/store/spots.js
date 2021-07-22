const SET_SPOTS = 'spots/setSpots'
const ONE_SPOT  = 'spots/getOneSpot'


const setSpots = (spots) => ({
    type: SET_SPOTS,
    spots,
})

const oneSpot = (spot) => ({
    type: ONE_SPOT,
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

const initialState = {};

const spotsReducer = ( state = initialState, action) => {
    switch (action.type) {
        case SET_SPOTS:
            return { ...state, ...Object.fromEntries(action.spots.map((spot) =>[
                spot.id, spot])) };
            default:
            return state;
    }
}

export default spotsReducer;