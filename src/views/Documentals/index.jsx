import { motion } from 'framer-motion';

// Framer motion
const pageTransition = {
    in: { opacity: 1 },
    out: { opacity: 0 }
}

export default function Documentals() {

    const documentals = (
        <motion.div
            className="container text-center text-light pt-4"
            initial='out'
            animate='in'
            exit='out'
            transition={{ duration: .2 }}
            variants={pageTransition}>
            <h1>Documentals coming soon...</h1>
        </motion.div>
    )

    return documentals;
}