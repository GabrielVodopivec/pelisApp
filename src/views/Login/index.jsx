import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// libraries
import Swal from "sweetalert2";
import axios from 'axios';

// Components
import CustomForm from "../../components/Form";

// Actions
import { setToken } from '../../app/actions';

// Services
import { formValidation } from '../../services'

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = React.useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const userDataLabel = event.target.name
        const userDataValue = event.target.value
        setUserInfo({
            ...userInfo,
            [userDataLabel]: userDataValue
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = userInfo;
        // challenge@alkemy.org
        // react

        formValidation(email, password) &&

        axios.post('http://challenge-react.alkemy.org', { email, password })
            .then((response) => {
                const token = response.data.token;
                localStorage.setItem('token', token)
                dispatch(setToken(token))
                navigate('/movies')
            })
            .catch(error => {
                Swal.fire({
                    title: error.response.data.error,
                    icon: 'error'
                })
            })
    }

    return (
        <CustomForm
            email={userInfo.email}
            password={userInfo.password}
            handleChange={handleChange}
            handleSubmit={handleSubmit} />
    )
}

export default Login;