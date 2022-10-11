import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// Libraries
import axios from 'axios';
// import Swal from "sweetalert2";

import { tokenSelector } from "../../app/selectors";
import Card from "../../components/Card";

function Movies() {

    const API_KEY = 'a04a68419e3fe121fef2adc2e7039e61';

    const navigate = useNavigate();

    const token = useSelector(tokenSelector);

    let [movies, setMovies] = useState([]);

    useEffect(() => {

        if (!token) {
            return navigate('/login');
        }

        const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

        axios.get(endpoint)
            .then(({ data }) => {
                const { results } = data;
                setMovies(results)
            })
            .catch(error => {
                console.log(error)
            })

    }, [navigate, token])

    console.log('re-render');

    return (
        <div className="movieContainer">
            {
                token ? (
                    movies?.map(movie => {
                        return (
                            <Card
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                votes={movie.vote_average}
                                votesQuantity={movie.vote_count}
                                released={movie.release_date}
                                overview={movie.overview}
                                img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            />
                        )
                    })
                ) : <h1>Loading ...</h1>
            }
        </div>
    )
}

export default Movies;