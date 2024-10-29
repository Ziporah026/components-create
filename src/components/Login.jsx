import React from 'react';
import './form.css';

function Login({ toggleForm }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!username || !password) {
            alert("Please fill in both fields.");
            return;
        }
        console.log('Submitted:', { username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h1>Login</h1>
                <label htmlFor="username-input">Username: </label>
                <input
                    id="username-input"
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    required
                /><br />

                <label htmlFor="password-input">Password: </label>
                <input
                    id="password-input"
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                /><br />

                <button type="submit">Login</button><br />

                <span>Don't have an account? </span>
                <a href="#" onClick={toggleForm}>Register here</a>
            </div>
        </form>
    );
}

export default Login;
