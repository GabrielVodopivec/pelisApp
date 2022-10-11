import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

// Selectors
import { tokenSelector } from "../../app/selectors"

export default function Documentals() {
    const token = useSelector(tokenSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            return navigate('/login')
        }
    }, [token, navigate]);

    const documentals = <h1>Documentals</h1>;

    return documentals;
}