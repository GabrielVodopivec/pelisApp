import { Link } from "react-router-dom";

function Notfound() {
    return (
        <div className="notFound">
            <h1>Oops! Something went wrong...</h1>
            <Link to={'/'} className="btn btn-secondary">Go Home!</Link>
        </div>
    )
}

export default Notfound;