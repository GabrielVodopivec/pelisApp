export default function SearchBar() {
    return (
        <form className="d-flex py-2">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
        </form>
    )
}