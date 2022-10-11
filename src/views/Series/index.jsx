import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

// Selectors
import { tokenSelector } from "../../app/selectors"

export default function Series() {
    const token = useSelector(tokenSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            return navigate('/login');
        }
    }, [token, navigate]);

    const series = <h1>Series</h1>;

    return series;
}