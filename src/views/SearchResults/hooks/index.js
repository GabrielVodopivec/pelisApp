import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function useSearchResult() {
    let [searchResults, setSearchResult] = useState({
        movies: [],
        error: ''
    })

    // Query params
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const s = query.get('s');

    useEffect(() => {

        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${s}`

        axios(url)
            .then(({ data }) => {
                const { results } = data;
                if (!results.length) {
                    return setSearchResult((searchResults) => {
                        return {
                            ...searchResults,
                            error: 'Movie not found'
                        }
                    })
                }
                setSearchResult(() => {
                    return {
                        movies: results,
                        error: ''
                    }
                });
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
            });

    }, [s]);

    return searchResults;
}