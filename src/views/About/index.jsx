import { Link } from "react-router-dom";

function Title(props) {
    return <h1>{props.title}</h1>;
}

function About() {
    const info = {title:'About'}
    return (
        <div className="notFound">
            <Title {...info} />
            <Link className="btn btn-secondary" to={'/'}>Go Home!</Link>
        </div>
    )
}

export default About;