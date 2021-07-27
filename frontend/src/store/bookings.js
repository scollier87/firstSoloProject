const SET_BOOKINGS = 'bookings/setBookings';

const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    bookings,
})

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
        default:
            return state;
    }
};

export default bookingsReducer;