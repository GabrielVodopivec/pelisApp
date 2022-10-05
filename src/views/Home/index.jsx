import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { deleteToken } from "../../app/actions";
import { tokenSelector } from "../../app/selectors";
import Header from "../../components/Header";

const Home = () => {
    const token = useSelector(tokenSelector)
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteToken())
    }

    return (
        <>
            <Header handleClick={handleClick} token={token}/>
            <div className="outlet">
                <Outlet />
            </div>
            
        </>
    )
}
export default Home;
