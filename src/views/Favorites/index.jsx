import { motion } from "framer-motion";

import Card from "../../components/Card"

import alt_img from '../../assets/images/alt-img-webp.webp';
import useFavoritesLoader from "./hooks";

// Framer motion
const pageTransition = {
    in: { opacity: 1 },
    out: { opacity: 0 }
}

export default function Favorites() {

    const { favs, loading } = useFavoritesLoader();
    
    return (
        <div className="movieContainer">
            {
                !loading
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
                    : <motion.div
                        className="container text-center text-light pt-4"
                        initial='out'
                        animate='in'
                        exit='out'
                        transition={{ duration: 1 }}
                        variants={pageTransition}>
                        <h1>Seems like you don't like any movie...</h1>
                    </motion.div>
                : <h1 style={{ color: 'wheat' }}>Loading...</h1>
            }
        </div>
    )
}