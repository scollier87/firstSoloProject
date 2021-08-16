import { csrfFetch } from "./csrf";
const SET_BOOKINGS = 'bookings/setBookings';
const CREATE_BOOKING = 'bookings/createOneBooking'

const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    bookings,
})

const createOneBooking = (booking) => ({
    type: CREATE_BOOKING,
    booking,
})

export const createBooking = data => async (dispatch) => {
    const response = await csrFetch (`api/bookings/`, {
        method: 'post',
        headers: {
            'Content_type': 'application/json'
    },
    body: JSON.stringify(data)
    });

    if(response.ok) {
        const booking = await response.json();
        dispatch(createOneBooking(booking));
        return booking;
    }
}
export const getBookings = () => async (dispatch) => {
    const res = await fetch('/api/bookings');
    const bookings = await res.json();
    dispatch(setBookings(bookings));
}

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKINGS:
            return { ...state, ...Object.fromEntries(action.bookings.map((booking) => [
                booking.id, booking])) };

        case CREATE_BOOKING:
            if (!state[action.booking.id]){
                const newState = {
                    ...state,
                    [action.booking.id]: action.booking,
                };
                return newState
            }
        default:
            return state;
    }
};

export default bookingsReducer;