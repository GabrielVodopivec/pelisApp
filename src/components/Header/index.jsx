import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>Peliss App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                !props.token ?
                                    <li className="nav-item">
                                        <Link className="btn btn-success" to={'login'}>Login</Link>
                                    </li> :
                                    <>
                                        <button className="btn btn-warning" onClick={props.handleClick}>Logout</button>
                                        <li className="nav-item">
                                            <Link className="nav-link active" to={'movies'} >Movies</Link>
                                        </li>
                                    </>
                            }
                            <li className="nav-item">
                                <Link className="nav-link active" to={'about'} >About</Link>
                            </li>
                        </ul>
                        {
                            props.token ?
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form> :
                                null
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}