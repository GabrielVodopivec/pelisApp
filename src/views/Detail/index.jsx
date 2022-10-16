import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Libraries
import axios from 'axios';

// Views
import Notfound from "../NotFound";

// Assets;
import altImg from '../../assets/images/alt-img-webp.webp';

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Detail() {

    let { movie_id } = useParams();
    const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

    let [movieDetail, setMovieDetail] = useState([]);
    let [error, setError] = useState(false);

    useEffect(() => {

        !movieDetail.length && axios(url)
            .then(({ data }) => {
                console.log('llamó')
                setMovieDetail([data])
            })
            .catch(error => {
                console.log(error)
                setError(() => {
                    return true
                })
            })

    }, [movie_id, movieDetail.length, url]);

    // console.log('re-render');

    if (error) return (<Notfound />);

    return (
        <>
            {
                movieDetail.length
                    ? <div className="movieDetail">
                        <img
                            className="imgDetail"
                            src={
                                movieDetail[0].backdrop_path
                                    ? `https://image.tmdb.org/t/p/w500${movieDetail[0].backdrop_path}`
                                    : altImg
                            } alt="movie" />
                        <div className="mainContent">
                            <h1> {movieDetail[0].original_title} </h1>
                            <span> Released Date: {movieDetail[0].release_date}</span>
                            <div className="genresMainContent">
                                {
                                    movieDetail[0].genres?.map(genre => (
                                        <span key={genre.id}>{genre.name}</span>
                                    ))
                                }
                            </div>
                            <p className="overviewMainContent">{movieDetail[0].overview}</p>
                        </div>
                    </div>
                    : null
            }
        </>
    )
}