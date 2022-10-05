
import { Link } from "react-router-dom"

function Card(props) {
    let stars = Array(Math.floor(props.votes)).fill(' ★ ')
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-dark text-center">{props.title}</h5>
                <p className="card-text text-dark cardOverview">{props.overview}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Votes: {
                    stars.map(star => {
                        return <span style={{color: 'brown'}}>{star}</span>;
                    })
                }</li>
                <li className="list-group-item">Votes quantity: {props.votesQuantity}</li>
                <li className="list-group-item">Released: {props.released}</li>
            </ul>
            <div className="card-body">
                <Link className="btn btn-secondary" to={`/detail/${props.id}`}>View Detail</Link>
            </div>
        </div>
    )
}

export default Card;