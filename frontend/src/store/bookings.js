import { csrfFetch } from "./csrf";
const SET_BOOKINGS = 'bookings/setBookings';
const CREATE_BOOKING = 'bookings/createOneBooking'
const UPDATE_BOOKING = 'bookings/updateOneBooking'
const REMOVE_BOOKING = 'bookings/removeOneBooking'

const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    bookings,
})

const createOneBooking = (booking) => ({
    type: CREATE_BOOKING,
    booking,
})

const updateOneBooking = (booking) => ({
    type: UPDATE_BOOKING,
    booking,
})

const removeOneBooking = (booking) => ({
    type: REMOVE_BOOKING,
    bookingId: booking,
})

export const createBooking = data => async (dispatch) => {
    const response = await csrfFetch (`/api/bookings`, {
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

export const updateBooking = data => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    if (response.ok) {
        const booking = await response.json();
        dispatch(updateOneBooking(booking));
        return booking;
    }
}

export const removeBooking = data => async (dispatch) => {
    const response = await csrfFetch(`/api/bookings/${data}`, {
        method: 'delete',
    })
    if (response.ok) {
        dispatch(removeOneBooking(data))
    }
    return response;
}

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKINGS:
            return { ...state, ...Object.fromEntries(action.bookings.map((booking) => [
                booking.id, booking])) };

        case CREATE_BOOKING:{
            if (!state[action.booking.id]){
                const newState = {
                    ...state,
                    [action.booking.id]: action.booking,
                };
                return newState
            }
        }

        case UPDATE_BOOKING:{
            return {
                ...state,
                [action.booking.id]: action.booking,
            };
        }

        case REMOVE_BOOKING: {
            delete state[action.bookingId]
            return { ...state }
        }
        default:
            return state;
    }
};

export default bookingsReducer;