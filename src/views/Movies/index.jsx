import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

import { tokenSelector } from "../../app/selectors";
import Card from "../../components/Card";
import { setGenres } from "../../app/actions";
const API_KEY = 'a04a68419e3fe121fef2adc2e7039e61';

function Movies() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(tokenSelector);

    let [movies, setMovies] = useState(null);

    useEffect(() => {
        console.log('eff')
        !token && navigate('/')

        const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            .then(({ data }) => {
                dispatch(setGenres(data.genres))
            })
            .catch(error => {
                console.log(error)
            })

        axios.get(endpoint)
            .then(({ data }) => {
                setMovies(data.results)
            })
    }, [dispatch, navigate, token])

    return (
        <div className="movieContainer">
            {
                !token ?
                    null : (
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
                    )
            }

        </div>
    )


}

export default Movies;