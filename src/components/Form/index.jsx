function CustomForm(props) {
    return (

        <div className="customForm">

            <form
                onSubmit={props.handleSubmit}
                className="container-fluid rounded-3 bg-dark mt-2 pt-2"
                
            >
                <h1 className="card-header text-center text-light pt-2">Login</h1>
                <div className="row justify-content-center">
                    <div className="col-md-10">

                        <div className="form-label">
                            <label
                                htmlFor="emailInput"
                                className="col col-form-label text-light px-4">
                                Email
                            </label>
                            {
                                props.errors.email ?
                                    <span
                                        style={{ color: "red" }}
                                    >
                                        {props.errors.email}
                                    </span> :
                                    null}
                        </div>

                        <div className="mb-2">
                            <input
                                id="emailInput"
                                type="text"
                                name="email"
                                className="form-control "
                                placeholder="example@mail.com"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.email} />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center py-4">
                    <div className="col-md-10">
                        <div className="form-label">
                            <label
                                htmlFor="passwordInput"
                                className="col col-form-label text-light px-4">
                                Password
                            </label>
                            {
                                props.errors.password ?
                                    <span
                                        style={{ color: "red" }}
                                    >{props.errors.password}</span> :
                                    null}
                        </div>
                        <div className="mb-2">
                            <input
                                id="passwordInput"
                                type="password"
                                name="password"
                                className="form-control "
                                placeholder="Password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.password} />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center pb-4">
                    <div className="col-6">
                        <button
                            type="submit"
                            className="btn btn-secondary w-100 mb-2"
                            disabled={
                                props.errors.email ||
                                    !props.email ||
                                    !props.password ? true : false}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>

        </div>

    )
}

export default CustomForm