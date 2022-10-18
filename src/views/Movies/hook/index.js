import { useState, useEffect } from "react";
// Libraries

import axios from 'axios';
import Swal from 'sweetalert2';
const API_KEY = process.env.REACT_APP_API_KEY;

export default function useMovieLoader()  {
    let [movies, setMovies] = useState(null);

    useEffect(() => {

        const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

        axios.get(endpoint)
            .then(({ data }) => {
                const { results } = data;
                setMovies(results)
            })
            .catch((error) => {
                console.log(error.message)
                const errorMessage = (
                    error.response
                    && error.response.data
                    && error.respnse.data.message
                ) || error.message

                Swal.fire({
                    title: errorMessage,
                    icon: 'error'
                })
            })
    }, [])

    return movies;
}