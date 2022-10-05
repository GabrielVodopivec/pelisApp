import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";
import { tokenSelector } from "../../app/selectors";
import Notfound from "../NotFound";

const API_KEY = 'a04a68419e3fe121fef2adc2e7039e61';

function Detail() {

    const token = useSelector(tokenSelector);
    const navigate = useNavigate();

    let { movie_id } = useParams();
    let [movieTitle, setMovieTitle] = useState(null)
    let [error, setError] = useState(false);

    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

    useEffect(() => {

        !token && navigate('/')
        axios(url)
            .then(({ data }) => {
                setMovieTitle(data.original_title)
            })
            .catch(error => {
                console.log(error)
                setError(() => {
                    return true
                })
            })

    }, [url, token, navigate])

    if (error) return (<Notfound />);

    return (
        <>
            {
                !movieTitle ?
                    null :
                    <div className="notFound">
                        <h1>Movie title {movieTitle}</h1>
                        <h3>Movie ID: {movie_id}</h3>

                        <Link className="btn btn-secondary" to={'/movies'}>Go Home!</Link>
                    </div>
            }
        </>
    )
}

export default Detail;