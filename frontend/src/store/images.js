import { csrfFetch } from "./csrf";

const SET_IMAGES = 'images/setImages';
const CREATE_IMAGE = 'images/createOneImage'
const UPDATE_IMAGE = 'images/updateOneImage'

const setImages = (images) => ({
    type: SET_IMAGES,
    images,
})

const createOneImage = (image) => ({
    type: CREATE_IMAGE,
    image,
})

const updateOneImage = (image) => ({
    type: UPDATE_IMAGE,
    image,
})

export const updateImage = data => async (dispatch) => {
    const response = await csrfFetch(`/api/images/${data.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application.json',
        },
        body:JSON.stringify(data)
    });
    if (response.ok) {
        const image = await response.json();
        dispatch(updateOneImage(image));
        return image;
    }
}

export const createImage = data => async (dispatch) => {
    const response = await csrfFetch(`/api/images`, {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if(response.ok) {
        const image = await response.json();
        dispatch(createOneImage(image));
        return image;
    }
}

export const getImages = () => async (dispatch) => {
    const res = await fetch('/api/images');
    const images = await res.json();
    dispatch(setImages(images));
}

const initialState = {};

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES:
            return { ...state, ...Object.fromEntries(action.images.map((image) => [image.id, image]))};

        case CREATE_IMAGE:
            if(!state[action.image.id]){
                const newState = {
                    ...state,
                    [action.image.id]: action.image,
                };
                return newState;
            }

        case UPDATE_IMAGE: {
            return {
                ...state,
                [action.image.id]: action.spot,
            };
        }

            default:
            return state;
    }
};

export default imagesReducer;