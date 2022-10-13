import { Link } from "react-router-dom"
import SearchBar from "../SearchBar"

export default function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark bd-navbar">
                <div className="container-fluid">
                    <Link className="navbar-brand px-2 my-2" to={'/'}>Peliss App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ">
                            {
                                !props.token ?
                                    <li className="nav-item px-2 mt-2">
                                        <Link className="btn btn-outline-light" to={'login'}>Login</Link>
                                    </li> :
                                    <>
                                        <li className="nav-item px-2 mt-2">
                                            <button className="btn btn-outline-light" onClick={props.handleClick}>Logout</button>
                                        </li>
                                        <li className="nav-item px-2 mt-2">
                                            <Link className="nav-link active" to={'movies'}>Movies</Link>
                                        </li>
                                        <li className="nav-item px-2 mt-2">
                                            <Link className="nav-link active" to={'series'}>Series</Link>
                                        </li>
                                        <li className="nav-item px-2 mt-2">
                                            <Link className="nav-link active" to={'documentals'}>Documentals</Link>
                                        </li>
                                        <li className="nav-item px-2 mt-2">
                                            <Link className="nav-link active" to={'favorites'}>My favorites</Link>
                                        </li>
                                    </>
                            }
                            <li className="nav-item px-2 mt-2">
                                <Link className="nav-link active" to={'about'} >About</Link>
                            </li>
                        </ul>
                        {props.token ? <SearchBar /> : null}
                    </div>
                </div>
            </nav>
        </header>
    )
}