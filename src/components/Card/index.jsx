import { Link } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

function Card(props) {
    let stars = Array(Math.floor(props.votes)).fill(' ★ ')
    return (
        <div className="card cardContainer bg-dark" >
            <img src={props.img} className="card-img-top" alt="movie" />
            <div className="card-body">
                <h2 className="card-title text-light text-center" style={{height: "2em"}}>{props.title}</h2>
                {/* <p className="card-text text-dark cardOverview">{props.overview}</p> */}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-center" >
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