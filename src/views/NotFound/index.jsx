import { Link, useRouteError } from "react-router-dom";

function Notfound() {

    let error = useRouteError()
    
    // throw new Error
    return (
        <div className="notFound">
            <h1>Oops! Something went wrong...</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={'/'} className="btn btn-secondary">Go Home!</Link>
        </div>
    )
}

export default Notfound;