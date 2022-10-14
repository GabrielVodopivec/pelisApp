import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

// Selectors
import { tokenSelector } from "../../app/selectors"

// Framer motion
const pageTransition = {
    in: { opacity: 1 },
    out: { opacity: 0 }
}

export default function Documentals() {
    const token = useSelector(tokenSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            return navigate('/login')
        }
    }, [token, navigate]);

    const documentals = (
        <motion.div
            initial='out'
            animate='in'
            exit='out'
            transition={{ duration: 1 }}
            variants={pageTransition}>
        <h1 style={{ textAlign: "center", color: "wheat" }}>Documentals coming soon...</h1>
        </motion.div>
    )

    return documentals;
}