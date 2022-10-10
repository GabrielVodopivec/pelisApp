import { useEffect, useState } from "react";
import axios from "axios";
import CarouselItem from "./CarouselItem"

export default function HomeCarousel() {

    const API_KEY = 'a04a68419e3fe121fef2adc2e7039e61';
    let [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        if (!popularMovies.length) {
            axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
                .then(({ data }) => {
                    const { results } = data;
                    setPopularMovies(results)
                })
                .catch(({response}) => {
                    console.log(response.data)
                })
        }
    }, [popularMovies.length])

    console.log('re-render')

    return (
        <div className="previewContainer" >
            <div className="container-fluid  pt-4">
                
                {
                    popularMovies.length ?
                        <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
                            <div className="carousel-inner ">
                                {
                                    popularMovies.map((movie, index) => {
                                        let movieClass;
                                        if (index === 0) {
                                            movieClass = "carousel-item active "
                                        } else {
                                            movieClass = "carousel-item"
                                        }
                                        return (
                                            <CarouselItem
                                                key={movie.id}
                                                movieClass={movieClass}
                                                img={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                                title={movie.original_title}
                                                released={movie.release_date}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div> : null
                }
            </div>
        </div>
    )
}