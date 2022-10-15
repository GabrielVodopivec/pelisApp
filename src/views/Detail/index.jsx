import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Libraries
import axios from 'axios';

// Views
import Notfound from "../NotFound";

// Selectors
import { tokenSelector } from "../../app/selectors"

// Assets;
import altImg from '../../assets/images/alt-img-webp.webp';

export default function Detail() {

    const API_KEY = 'a04a68419e3fe121fef2adc2e7039e61';
    const token = useSelector(tokenSelector);
    const navigate = useNavigate();

    let { movie_id } = useParams();

    let [movieDetail, setMovieDetail] = useState(null);
    let [error, setError] = useState(false);

    useEffect(() => {

        if (!token) {
            return navigate('/login');
        }

        const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
        axios(url)
            .then(({ data }) => {
                setMovieDetail(data)
            })
            .catch(error => {
                console.log(error)
                setError(() => {
                    return true
                })
            })

    }, [movie_id, token, navigate]);

    console.log('re-render');

    if (error) return (<Notfound />);

    return (
        <>
            {
                movieDetail
                    ? <div className="movieDetail">
                        <img
                            className="imgDetail"
                            src={
                                movieDetail.backdrop_path ?
                                    `https://image.tmdb.org/t/p/w500${movieDetail.backdrop_path}` :
                                    altImg
                            } alt="movie" />
                        <div className="mainContent">
                            <h1> {movieDetail.original_title} </h1>
                            <span> Released Date: {movieDetail.release_date}</span>
                            <div className="genresMainContent">
                                {
                                    movieDetail.genres?.map(genre => (
                                        <span key={genre.id}>{genre.name}</span>
                                    ))
                                }
                            </div>
                            <p className="overviewMainContent">{movieDetail.overview}</p>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}