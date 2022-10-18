// Components
import Card from "../../components/Card";

// Assets (alt img)
import alt_img from '../../assets/images/alt-img-webp.webp';
import useMovieLoader from "./hook";

function Movies() {
    const movies = useMovieLoader();

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