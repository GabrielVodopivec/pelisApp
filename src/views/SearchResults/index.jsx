// Components
import Card from "../../components/Card";

// Hook
import useSearchResult from "./hooks";

// Assets
import alt_img from '../../assets/images/alt-img-webp.webp'

export default function SearchResults() {
    const { movies, error } = useSearchResult();
    return (
        <div className="movieContainer">
            {
                error
                    ? (<h1 style={{ color: "wheat" }} >{error}</h1>)
                    : (movies?.map(movie => {
                        return (
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
                        )
                    }))
            }
        </div>
    )
}