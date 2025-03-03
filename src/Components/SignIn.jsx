import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from '../Navbar';

const SignIn = () => {
    const { createUser } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get("name")
        const email = form.get("email")
        const password = form.get("password")

        createUser(email, password)
            .then(result => {
                const user = result.user
                const createdAt = user?.metadata?.creationTime
                const users = { name, email, password, createdAt }

                // send to mongoDB server
                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log("user create succesfully")
                        }
                    })


            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <Navbar></Navbar>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold py-5">Sign Up now!</h1>
                    </div>
                    <div className="card bg-base-100  shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSignUp} className="fieldset">
                                <div>
                                    <label className="fieldset-label">Name</label>
                                    <input name='name' type="text" className="input" placeholder="Name Here" />
                                </div>
                                <div>
                                    <label className="fieldset-label">Email</label>
                                    <input name='email' type="email" className="input" placeholder="Email" />
                                </div>
                                <div>
                                    <label className="fieldset-label">Password</label>
                                    <input name='password' type="password" className="input" placeholder="Password" />
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Sing Up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default SignIn;