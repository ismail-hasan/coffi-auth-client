import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from '../Navbar';

const Login = () => {
    const { SignInUser } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value



        SignInUser(email, password)
            .then(results => {
                const user = results.user
                const lastSignInTime = user?.metadata?.lastSignInTime
                const loginUser = { email, lastSignInTime }


                // update last login data
                fetch(`http://localhost:3000/users/`, {
                    method: "PATCH",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(err => {
                console.log(err);

            })

    }

    return (
        <>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold py-5">Log In now!</h1>
                    </div>
                    <div className="card bg-base-100  shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin} className="fieldset">
                                <div>
                                    <label className="fieldset-label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="fieldset-label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                </div>
                                <button className="btn btn-neutral mt-4">Log in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;