import React, { useState } from 'react';
import { loginUser } from './authService';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginUser(username, password);
            if (response.ok) {
                const { token, id } = await response.json();
                localStorage.setItem('token', token);
                localStorage.setItem('userId', id);
                // Redirect to profile page
                // Example: history.push('/profile');
            } else {
                const { message } = await response.json();
                setError(message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {error && <div>{error}</div>}
        </div>
    );
};

export default Login;
