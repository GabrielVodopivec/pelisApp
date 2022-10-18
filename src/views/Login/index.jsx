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
// import { formValidation } from '../../services'

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = React.useState({
        email: 'fakeuser@mail.com',
        password: 'react',
        error: {
            email: '',
            password: ''
        }
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo((prevUserInfo) => {
            return {
                ...prevUserInfo,
                [name]: value
            }
        })
        setUserInfo((prevUserInfo) => {
            return {
                ...prevUserInfo,
                error: {
                    ...prevUserInfo.error,
                    [name]: ''
                }
            }
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
            return setUserInfo((prevUserInfo) => {
                return {
                    ...prevUserInfo,
                    error: {
                        ...prevUserInfo.error,
                        [name]: 'Ingrese un email válido'
                    }
                }
            })
        } else {
            setUserInfo((prevUserInfo) => {
                return {
                    ...prevUserInfo,
                    error: {
                        ...prevUserInfo.error,
                        [name]: ''
                    }
                }
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = userInfo;
        // challenge@alkemy.org
        // react

        axios.post('https://goalsappgvs.herokuapp.com/api/users/login', { email, password })
            .then(({ data }) => {
                const { token } = data;
                localStorage.setItem('token', token)
                dispatch(setToken(token))
                navigate('/movies')
            })
            .catch((error) => {

                const errorMessage = (
                    error.response
                    && error.response.data
                    && error.respnse.data.message
                ) || error.message

                Swal.fire({
                    title: errorMessage,
                    icon: 'error'
                })
            })
    }

    const customFormProps = {
        email: userInfo.email,
        password: userInfo.password,
        errors: userInfo.error,
        handleChange,
        handleSubmit,
        handleBlur
    }

    return <CustomForm {...customFormProps} />;

}

export default Login;