import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Libraries
import axios from "axios";
import Swal from "sweetalert2";
// Services
import { caruselItemMaper } from "../../services/carouselServices";
// Framer motion
const pageTransition = {
    in: { opacity: 1 },
    out: { opacity: 0 }
}
const API_KEY = process.env.REACT_APP_API_KEY;
export default function HomeCarousel() {

    let [popularMovies, setPopularMovies] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(({ data }) => {
                const { results } = data;
                setPopularMovies(results);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error.message)
                const errorMessage = (
                    error.response
                    && error.response.data
                    && error.respnse.data.message
                ) || error.message

                Swal.fire({
                    title: errorMessage,
                    icon: 'error'
                })
            })
    }, [])

    const carousels = (
        <div className="previewContainer" >
            <div className="container py-2">
                <div className="row justify-content-center">
                    <motion.div
                        className="col-lg-4 py-2 align-content-end"
                        initial='out'
                        animate='in'
                        exit='out'
                        transition={{ duration: 1 }}
                        variants={pageTransition}>
                        <Link to='series'
                        >
                            {
                                popularMovies ?
                                    <div id="carouselExampleInterval1" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner ">
                                            {
                                                caruselItemMaper(popularMovies, "Series")
                                            }
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval1" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div> : null
                            }
                        </Link>
                    </motion.div>

                    <motion.div
                        className="col-lg-4 py-2 align-content-end"
                        initial='out'
                        animate='in'
                        exit='out'
                        transition={{ duration: 1 }}
                        variants={pageTransition}
                    >
                        <Link to='movies'>
                            {
                                popularMovies ?
                                    <div id="carouselExampleInterval2" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner ">
                                            {caruselItemMaper(popularMovies, "Movies")}
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval2" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div> : null
                            }
                        </Link>
                    </motion.div>

                    <motion.div
                        className="col-lg-4 py-2 align-content-end"
                        initial='out'
                        animate='in'
                        exit='out'
                        transition={{ duration: 1 }}
                        variants={pageTransition}
                    >
                        <Link to='documentals'>
                            {
                                popularMovies ?
                                    <div id="carouselExampleInterval3" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner ">
                                            {caruselItemMaper(popularMovies, "Documentals")}
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval3" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div> : null
                            }
                        </Link>
                    </motion.div>

                </div>
            </div>
        </div>
    )

    return loading ? null : carousels;
}