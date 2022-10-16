import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { tokenSelector } from '../../app/selectors';

export default function ProtectedRoute ({ children }) {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(null);
    const token = useSelector(tokenSelector)

    useEffect(() => {
        if (!token) {
            return navigate('/login')
        }
        setAuth(true)
    }, [token, auth, navigate]);

    return (auth ? children : null)
}