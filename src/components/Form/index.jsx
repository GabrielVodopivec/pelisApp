function CustomForm(props) {
    return (
        <div className="container customForm bg-dark m-2" style={{ borderRadius: "10px" }}>
            <h2 className="card-header text-light text-center pt-2">Login</h2>
            <form onSubmit={props.handleSubmit} className="pt-4">
                <div className="row">
                    <label
                        htmlFor="emailInput"
                        className="col-2 col-form-label text-light">
                        Email
                    </label>
                    <div className="col-10">
                        <input
                            id="emailInput"
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="example@mail.com"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.email} />
                    </div>
                    {props.errors.email ? <p>{props.errors.email}</p> : null}
                </div>
                <div className="row py-4">
                    <label
                        htmlFor="passwordInput"
                        className="col-2 col-form-label text-light">
                        Password
                    </label>
                    <div className="col-10">
                        <input
                            id="passwordInput"
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.password} />
                    </div>
                    {props.errors.password ? <p>{props.errors.password}</p> : null}
                </div>
                <div className="row py-4 px-4">
                    <button
                        type="submit"
                        className="btn btn-secondary"
                        disabled={
                            props.errors.email ||
                            props.errors.password ||
                            !props.email ||
                            !props.password ||
                            props.isSubmmiting ? true : false}
                    >
                        Login
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CustomForm