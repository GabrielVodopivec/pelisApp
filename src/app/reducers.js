import { DELETE_TOKEN, SET_GENRES, SET_TOKEN } from "./actions";

const token = localStorage.getItem('token');

export const initialState = {
    token: token ? token : null,
    movies: [],
    genres: [],
    favs: []
}

export const rootReducer = (state, action) => {
    switch (action.type) {
        
        case SET_TOKEN: {
            const { payload } = action
            return {
                ...state,
                token: payload
            }
        }

        case DELETE_TOKEN: {
            return {
                ...state,
                token: null
            }
        }
        case SET_GENRES: {
            const { payload } = action;
            return {
                ...state,
                genres: payload
            }
        }

        default: return state;
    }
}