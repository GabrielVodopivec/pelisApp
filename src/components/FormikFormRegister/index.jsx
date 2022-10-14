import { useFormik } from "formik";

export default function FormikFormRegister() {
    const initialValues = {
        name: '',
        email: '',
        password: ''
    }

    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'name is required'
        }
        if (!values.email) {
            errors.email = 'email is required'
        }
        if (!values.password) {
            errors.password = 'password is required'
        }
        return errors;
    }

    const onSubmit = () => {
        alert('Registered')
    }

    const formik = useFormik({
        initialValues,
        validate,
        onSubmit
    });

    const { handleSubmit, handleChange, values, errors } = formik;

    return (
        <div className="formikForm">
            <form className="container-lg bg-dark text-light rounded my-2 py-2 px-4" style={{ maxWidth: '576px' }} onSubmit={handleSubmit}>
                <h1 className="py-2">Register</h1>
                <div>
                    <label className="form-label fs-5" htmlFor="nameInput">Name</label>
                    <input
                        className="form-control"
                        style={{ backgroundColor: '#996c63', borderColor: '#996c63' }}
                        name="name"
                        type="text"
                        id="nameInput"
                        value={values.name}
                        onChange={handleChange}
                    />
                    <div className="form-label text-danger" style={{ height: '2em' }}>
                        {errors.name && errors.name}
                    </div>
                </div>
                <div>
                    <label className="form-label fs-5" htmlFor="emailInput">Email</label>
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
                    <label className="form-label fs-5" style={{ fontSize: '1.2em' }} htmlFor="passwordInput">Password</label>
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