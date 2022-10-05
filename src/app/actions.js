export const SET_TOKEN = "SET_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";
export const SET_GENRES = "SET_GENRES";


export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        payload: token
    }
}

export const deleteToken = () => {
    localStorage.removeItem('token');
    return {
        type: DELETE_TOKEN
    }
}

export const setGenres = (genres) => {
    return {
        type: SET_GENRES,
        payload: genres
    }
}