import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

function Card(props) {

    let stars = Array(Math.floor(props.votes)).fill(' ⭐ ');

    let [fav, setFav] = useState(false);

    const addOrRemovefavs = () => {

        const elemenToStore = {
            [props.id]: {
                isFav: true,
                original_title: props.title,
                backdrop_path: props.img,
                vote_average: props.votes,
                vote_count: props.votesQuantity,
                release_date: props.released
            }
        };

        let checkStore = localStorage.getItem('favs');

        const elementToStoreToJSON = JSON.stringify(elemenToStore);

        if (!checkStore) {
            localStorage.setItem('favs', elementToStoreToJSON);
            setFav(() => elemenToStore[props.id].isFav);

        } else {
            let storeToObj = JSON.parse(checkStore);
            if (storeToObj[props.id]) {
                if (storeToObj[props.id].isFav) {
                    storeToObj[props.id].isFav = false;
                } else {storeToObj[props.id].isFav = true;}
            } else {
                storeToObj = {
                    ...storeToObj,
                    [props.id]: {
                        ...elemenToStore[props.id]
                    }
                }
            }
            setFav(storeToObj[props.id].isFav);
            const infoToStoreToJSON = JSON.stringify(storeToObj);
            localStorage.setItem('favs', infoToStoreToJSON);
        }

    }

    useEffect(() => {
        let getFavs = localStorage.getItem('favs');
        if (getFavs) {
            let getFavsToObj = JSON.parse(getFavs);
            if (getFavsToObj[props.id]) {
                setFav(getFavsToObj[props.id].isFav)
            }
        }
    }, [props.id])

    return (
        <div className="card cardContainer bg-dark" >
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
                        stars.map(star => {
                            return <span key={uuidv4()} style={{ color: 'gold' }}>{star}</span>;
                        })
                    }
                </li>
                <li className="list-group-item bg-dark text-light text-center">Votes quantity: {props.votesQuantity}</li>
                <li className="list-group-item bg-dark text-light text-center">Released: {props.released}</li>
            </ul>
            <div className="card-body">
                <Link className="btn w-100 btn-secondary" to={`/detail/${props.id}`}>View Detail</Link>
            </div>
        </div>
    )
}

export default Card;