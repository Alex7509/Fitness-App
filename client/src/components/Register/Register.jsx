
export const Register = () => {
    return (
        <div className="conteiner min-vh-100 d-flex justify-content-center align-items-center form-control-lg">
            <form >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input
                        type="username"
                        className="form-control"
                        id="exampleInputUsername1"
                        placeholder="Username"
                        name="username"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail2"
                        placeholder="Enter email"
                        name="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                        placeholder="Password"
                        name="password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm password</label>
                    <input
                        type="confirmPassword"
                        className="form-control"
                        id="exampleInputPassword3"
                        placeholder="Confirm password"
                        name="confirmPassword"
                    />
                </div>
                <div className="text-center form-control-lg">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};