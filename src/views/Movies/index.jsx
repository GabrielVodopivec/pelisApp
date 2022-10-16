import { useEffect, useState } from "react";

// Libraries
import axios from 'axios';

// Components
import Card from "../../components/Card";

// Assets (alt img)
import alt_img from '../../assets/images/alt-img-webp.webp';

const API_KEY = process.env.REACT_APP_API_KEY;

function Movies() {

    let [movies, setMovies] = useState(null);

    useEffect(() => {

        const endpoint = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

        axios.get(endpoint)
            .then(({ data }) => {
                const { results } = data;
                setMovies(results)
            })
            .catch(error => {
                console.log(error)
            })

    }, [])

    // console.log('re-render');

    return (
        <div className="movieContainer">
            {
                (movies?.map(movie => (
                    <Card
                        key={movie.id}
                        id={movie.id}
                        title={movie.original_title}
                        votes={movie.vote_average}
                        votesQuantity={movie.vote_count}
                        released={movie.release_date}
                        overview={movie.overview}
                        img={
                            movie.backdrop_path ?
                                `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` :
                                alt_img
                        }
                    />
                )))
            }
        </div>
    )
}

export default Movies;