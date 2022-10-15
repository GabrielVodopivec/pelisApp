import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

import { deleteToken } from "../../app/actions";
import { tokenSelector } from "../../app/selectors";
import Header from "../../components/Header";
import Footer from '../../components/Footer';

// Framer motion
const pageTransition = {
    in: {
        opacity: 1,
        transition: {
            duration: 1
        }
    },
    out: {
        opacity: 0,
        transition: {
            duration: 1
        }
    }
}

const Home = () => {

    const token = useSelector(tokenSelector);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteToken())
    }

    return (
        <>
            <Header handleClick={handleClick} token={token} />
            <motion.div
                className="outlet"
                initial='out'
                animate='in'
                exit='out'
                variants={pageTransition}>
                <Outlet />
            </motion.div>
            <Footer />
        </>
    )
}
export default Home;
