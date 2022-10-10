import { Link } from "react-router-dom";

function Notfound() {
    // throw new Error
    return (
        <div className="notFound">
        <h1>Oops! Not Found</h1>
        <Link to={'/movies'} className="btn btn-secondary">Go Home!</Link>
        </div>
    )
}

export default Notfound;