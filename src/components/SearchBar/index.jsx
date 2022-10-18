import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SearchBar() {

    const navigate = useNavigate();
    let [keyWord, setKeyWord] = useState('');

    const handleChange = (event) => {
        const { value } = event.target;
        setKeyWord(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const cleanWord = keyWord.trim();

        if (cleanWord.length === 0) 
            return Swal.fire({
                title: 'Nothing to search'
            });
        
        setKeyWord('');
        navigate(`results?s=${cleanWord}`)

    }

    const searchForm = (
        <form onSubmit={handleSubmit} className="d-flex py-2">
            <input
                className="form-control me-2"
                type="search"
                name="search"
                value={keyWord}
                onChange={handleChange}
                placeholder="Search"
                aria-label="Search"
            />
            <button
                className="btn btn-outline-light"
                type="submit"
            >
                Search
            </button>
        </form>
    );

    return searchForm;
}