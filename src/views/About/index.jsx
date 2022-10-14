import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const pageTransition = {
    in: { opacity: 1 },
    out: { opacity: 0 }
  }

function Title(props) {
    return <h1>{props.title}</h1>;
}

function About() {
    const info = { title: 'About' }
    return (
        <motion.div
            className='notFound'
            initial='out'
            animate='in'
            exit='out'
            transition={{ duration: 1 }}
            variants={pageTransition}>
            <Title {...info} />
            <Link className="btn btn-secondary" to={'/'}>Go Home!</Link>
        </motion.div>
    )
}

export default About;