import { useFormik } from "formik"

export default function FormikForm() {

    const initialValues = {
        email: '',
        password: ''
    }

    const validate = (values) => {
        const errors = {};
        if (!values.email) {
            errors.email = 'email is required'
        }
        if (!values.password) {
            errors.password = 'password is required'
        }
        return errors;
    }

    const onSubmit = () => {
        localStorage.setItem('loggedIn', 'Si señor!')
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    });

    const { handleSubmit, handleChange, values, errors } = formik;

    return (
        <div className="formikForm">
            <form className="container bg-dark text-light rounded my-2 py-2 px-4" style={{ maxWidth: '754px' }} onSubmit={handleSubmit}>
                <h1 className="py-2">Login</h1>
                <div>
                    <label className="form-label fs-4" htmlFor="emailInput">Email</label>
                    <input
                        className="form-control"
                        style={{ backgroundColor: '#996c63', borderColor: '#996c63' }}
                        name="email"
                        type="email"
                        id="emailInput"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="form-label text-danger" style={{ height: '2em' }}>
                        {errors.email && errors.email}
                    </div>
                </div>
                <div>
                    <label className="form-label fs-4" style={{ fontSize: '1.2em' }} htmlFor="passwordInput">Password</label>
                    <input
                        className="form-control"
                        style={{ backgroundColor: '#996c63', borderColor: '#996c63' }}
                        type="password"
                        name="password"
                        id="passwordInput"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <div className="form-label text-danger" style={{ height: '2em' }}>
                        {errors.password && errors.password}
                    </div>
                </div>
                <div>
                    <input className="form-control text-light fs-4 w-75 position-relative top-50 start-50 translate-middle mt-5" style={{ backgroundColor: '#555555' }} type="submit" value={"Login"} />
                </div>
            </form>
        </div>
    )
}