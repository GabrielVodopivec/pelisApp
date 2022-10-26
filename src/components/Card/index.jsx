import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

import { motion } from 'framer-motion';
import useCardFavorite from "./hook";

// Framer motion
const pageTransition = {
    in: {
        opacity: 1,
        transition: {
            duration: .5
        }
    },
    out: {
        opacity: 0,
        transition: {
            duration: .5
        }
    }
}

function Card(props) {

    let stars = Array(Math.floor(props.votes)).fill(' ⭐ ');

    let { fav, addOrRemovefavs } = useCardFavorite(props);

    return (

        <motion.div
            className='card cardContainer bg-dark'
            initial='out'
            animate='in'
            exit='out'
            variants={pageTransition}>
            <div className="imgOverflow">
                <img src={props.img} className="card-img-top" alt="movie" />
            </div>
            <button
                onClick={addOrRemovefavs}
                className={fav ? "removeMovieFav" : "addMovieFav"}
            >
                {fav ? '❤️' : '🖤'}
            </button>
            <div className="card-body">
                <h2 className="card-title text-light text-center" style={{ height: "2em" }}>{props.title}</h2>
                {/* <p className="card-text text-dark cardOverview">{props.overview}</p> */}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-center" >
                    .
                    {
                        stars.map((star) => (
                            <span key={uuidv4()} style={{ color: 'gold' }}>
                                {star}
                            </span>
                        ))

                    }
                </li>
                <li className="list-group-item bg-dark text-light text-center">Votes quantity: {props.votesQuantity}</li>
                <li className="list-group-item bg-dark text-light text-center">Released: {props.released}</li>
            </ul>
            <div className="card-body">
                <Link className="btn w-100 btn-secondary" to={`/detail/${props.id}`}>View Detail</Link>
            </div>
        </motion.div >

    )
}

export default Card;