import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import { tokenSelector } from "../../app/selectors";
import Card from "../../components/Card";

const API_KEY = 'a04a68419e3fe121fef2adc2e7039e61';

function Movies() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(tokenSelector);

    let [movies, setMovies] = useState([]);

    useEffect(() => {

        if (!token) {
            return navigate('/');
        }

        const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

        if (!movies.length) {
            axios.get(endpoint)
                .then(({ data }) => {
                    const { results } = data;
                    setMovies(results)
                })
                .catch(error => {
                    console.log(error)
                    
                })
        }

    }, [dispatch, navigate, token, movies.length])

    console.log('re-render');

    return (
        <div className="movieContainer">
            {
                token ? (
                    
                    movies?.map(movie => {
                        return (
                            <div key={movie.id} className="movieCard">
                                <div className="row">
                                    <div className="col-4">
                                        <Card
                                            id={movie.id}
                                            title={movie.original_title}
                                            votes={movie.vote_average}
                                            votesQuantity={movie.vote_count}
                                            released={movie.release_date}
                                            overview={movie.overview}
                                            img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                ) : <h1>Loding ...</h1>
            }
        </div>
    )
}

export default Movies;