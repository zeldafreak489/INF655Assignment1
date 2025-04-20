import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

export default function Header() {
    const {logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/signin");
            alert("You have now been logged out");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div>
                <h1>Welcome to Task Manager</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/tasks">Home</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Log Out</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}