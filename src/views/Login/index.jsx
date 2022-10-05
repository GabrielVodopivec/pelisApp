import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// libraries
// import Swal from "sweetalert2";
// import axios from 'axios';

// Components
import CustomForm from "../../components/Form";

// Actions
import { setToken } from '../../app/actions';

// // Services
// import { formValidation } from '../../services'

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = React.useState({
        email: '',
        password: '',
        error: {
            email: '',
            password: ''
        }
    })



    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const handleBlur = (event) => {
        const { name, value } = event.target;
        const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        if (!value) {
            return setUserInfo({
                ...userInfo,
                error: {
                    ...userInfo.error,
                    [name]: 'Campo obligatorio'
                }
            })
        } else if (name === 'email' && !emailRegex.test(value)) {
            return setUserInfo({
                ...userInfo,
                error: {
                    ...userInfo.error,
                    [name]: 'Ingrese un email válido'
                }
            })
        } else {
            setUserInfo({
                ...userInfo,
                error: {
                    ...userInfo.error,
                    [name]: ''
                }
            })
        }


    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const token = 'a65d4a65s4d6';
        localStorage.setItem('token',token);
        dispatch(setToken(token))
        navigate('/movies')
        // const { email, password } = userInfo;
        // challenge@alkemy.org
        // react

        // axios.post('http://challenge-react.alkemy.org', { email, password })
        //     .then((response) => {
        //         const token = response.data.token;
        //         localStorage.setItem('token', token)
        //         dispatch(setToken(token))
        //         navigate('/movies')
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         Swal.fire({
        //             title: error.response.data.error,
        //             icon: 'error'
        //         })
        //     })
    }

    return (
        <CustomForm
            email={userInfo.email}
            password={userInfo.password}
            errors={userInfo.error}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleBlur={handleBlur} />
    )
}

export default Login;