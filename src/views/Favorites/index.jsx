

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenSelector } from "../../app/selectors"
import Card from "../../components/Card"

import alt_img from '../../assets/images/alt-img-webp.webp'

export default function Favorites() {

    const token = useSelector(tokenSelector);
    const navigate = useNavigate();

    let [favs, setFavs] = useState([]);
    
    useEffect(() => {
        const movieFavs = JSON.parse(localStorage.getItem('favs'));

        if (!token) {
            return navigate('/login');
        }
        if (movieFavs) {
            setFavs(Object.entries(movieFavs));
        }

    }, [token, navigate])

    // console.log(favs)

    return (
        <div className="movieContainer">
            {
                token ? 
                favs.length ? (
                    favs.map(([movieId, movieInfo]) => {
                            return (
                                <Card
                                    key={movieId}
                                    id={movieId}
                                    title={movieInfo.original_title}
                                    votes={movieInfo.vote_average}
                                    votesQuantity={movieInfo.vote_count}
                                    released={movieInfo.release_date}
                                    img={
                                        movieInfo.backdrop_path ? 
                                        `https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}` :
                                        alt_img
                                    }
                                />
                            )
                    })
                ) : <h1 style={{color:'wheat'}}>No tienes favoritos</h1> :
                <h1 style={{color:'wheat'}}>Loading ...</h1>
            }
        </div>
    )
}