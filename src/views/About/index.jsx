import { Link } from "react-router-dom";

function About() {
    return (
        <div className="notFound">
            <h1>About</h1>
            <Link className="btn btn-secondary" to={'/'}>Go Home!</Link>
        </div>
    )
}

export default About;