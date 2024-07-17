import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [login, setLogin] = useState({ name: "", email: "", password: "", location: "" });

    const passdata = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8001/api/newUser', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: login.name, email: login.email, password: login.password, location: login.location })
            });

            const finaldata = await response.json();
            if (!finaldata.success) {
                alert(finaldata.errors ? finaldata.errors.map(error => error.msg).join(', ') : "Enter correct data");
            } else {
                alert("User created successfully!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while creating the user.");
        }
    };

    const getvalue = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header bg-primary text-white text-center">
                            <h4>Signup</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={passdata}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputUsername" className="form-label">Username</label>
                                    <input type="text" className="form-control" name='name' value={login.name} onChange={getvalue} id="exampleInputUsername" required />
                                    <div className="invalid-feedback">
                                        Please enter a username.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input name='email' value={login.email} onChange={getvalue} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input name='password' value={login.password} onChange={getvalue} type="password" className="form-control" id="exampleInputPassword1" required />
                                    <div className="invalid-feedback">
                                        Please enter a password.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                                    <input name='location' value={login.location} onChange={getvalue} type="text" className="form-control" id="exampleInputAddress" required />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Submit</button>
                                <div className="mt-3 text-center">
                                    <Link className="btn btn-link" to="/login">Already have an account? Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
