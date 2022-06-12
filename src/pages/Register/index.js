import React, { useState } from "react";
import Register from "components/Register";
import useUser from "hooks/useUser";
import { Link, useLocation } from "wouter";



export default function RegisterPage() {
    const [registered, setRegistered] = useState(false)
    const { currentUser } = useUser()
    const [, navigate] = useLocation()

    if (currentUser) navigate('/');


    return <>
        {!registered ? <div>
            <h2 className="text-center mt-5" >Register</h2>
            <Register setRegistered={setRegistered} />
        </div> : <div className="text-center mt-5">
            <h3>Congratulations ✅!  You've been successfully registered!</h3>
            <span>Log In <Link to="/login">here...</Link></span>
        </div>
        }
    </>
}