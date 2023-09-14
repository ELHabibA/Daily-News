import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [, setCookie] = useCookies(['session']);

    const handleLogin = async (e) => {
        e.preventDefault();

        const body = {
            "username": username, "password": password
        }
        const response = await fetch(`/authenticate/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        if (response.status === 200) {
            setCookie('session', 'test', { path: '/' });
            localStorage.setItem("token", data.token)
            navigate('/articles');
        } else {
            alert('Wrong credentials.');
        }
    };

    // TODO: add styles
    const containerStyle = {
        backgroundColor: '#f7f7f7',
        padding: '30px',
        textAlign: 'center',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        margin: '0 auto',
        position: 'absolute', // Position absolutely
        top: '50%', // Center vertically
        left: '50%', // Center horizontally
        transform: 'translate(-50%, -50%)', // Center using transform
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        marginBottom: '10px',
        fontSize: '16px',
    };

    const imageStyle = {
        width: '300px', // Anpassa bilden efter behov
    };

    const imageDivStyle = {
        textAlign: 'center', // Anpassa bilden efter behov
    };

    return (
        <div style={containerStyle}>
            <div style={imageDivStyle}>
                <img src="daily-news.png" alt="Background" style={imageStyle} />
            </div>
            <h1 style={{ color: '#333', fontFamily: 'Arial, sans-serif', fontSize: '32px', marginBottom: '20px' }}>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={inputStyle}
                        id="username" // Lägg till id-attributet här
                        name="username" // Lägg till name-attributet här
                        autoComplete="username" // Lägg till autocomplete-attributet
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={inputStyle}
                        id="password" // Lägg till id-attributet här
                        name="password" // Lägg till name-attributet här
                        autoComplete="current-password" // Lägg till autocomplete-attributet
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleLogin}
                    style={{ background: '#b00a27', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '18px' }}
                >
                    Login
                </button>
                <p style={{ marginTop: '10px', fontSize: '14px' }}>
                    Do not have an account? <a href="/register" style={{ color: '#007BFF' }}>Create a new account</a>
                </p>
            </form>
        </div>
    );
};

export default Login;