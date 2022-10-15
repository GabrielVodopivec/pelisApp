

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenSelector } from "../../app/selectors"
import Card from "../../components/Card"

import alt_img from '../../assets/images/alt-img-webp.webp'

export default function Favorites() {

    const token = useSelector(tokenSelector);
    const navigate = useNavigate();

    let [favs, setFavs] = useState(null);
    let [loading, setLoading] = useState(true);


    useEffect(() => {
        // Simulación de demora en la consulta de Favoritos;
        setTimeout(() => {
            const favsObject = JSON.parse(localStorage.getItem('favs'));
            setFavs(Object.entries(favsObject));
        }, 1200)

    }, [])

    useEffect(() => {
        if (!token) {
            return navigate('/login');
        }
        if (favs) {
            setLoading(false)
        }
    }, [token, navigate, favs])

    // console.log(favs)
    console.log('re-render')

    return (
        <div className="movieContainer">
            {
                token
                    ? !loading
                        ? favs.length ? (
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
                        )
                            : <h1 style={{ color: 'wheat' }} className='text-center'>Seems like you don't like any movie...</h1>
                        : <h1 style={{ color: 'wheat' }}>Loading...</h1>
                    : null
            }
        </div>
    )
}