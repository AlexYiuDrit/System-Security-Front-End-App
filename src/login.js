import React, { useState, useEffect } from 'react';
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import sha256 from 'js-sha256';

const serverUrl = 'http://localhost:4000';

const LoginPage = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [stage, setStage] = useState(1); // Stage 1 for email input, Stage 2 for password input
    const [emailError, setEmailError] = useState(null); // State to store email validation error message
    const [passwordError, setPasswordError] = useState(null);
    const [salt, setSalt] = useState('');
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (salt !== '') {
            console.log("useEffect...");
        }
    }, [salt]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        console.log(user);
        auth.login(user);
        onLoginSuccess();
        localStorage.setItem('isLoggedIn', true); // Store the isLoggedIn state in localStorage
        navigate('/authenticatedPage'); // Navigate to /authenticatedPage after successful login
    };

    const handleNext = async () => {
        if (stage === 1) {
            // Perform email validation
            const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/; // Regex pattern for email validation
            if (!emailRegex.test(email)) {
                setEmailError('Invalid email format'); // Set email validation error message
                return;
            }

            // Make axios call to server to check if email is valid
            try {
                // let response = await axios.post(`${serverUrl}/login/checkEmail`, { email });
                let response = { status: 200, data: { status: 'ok', data: { salt: '012', userName: 'Alex' } } };
                if (response.status === 200 && response.data.status === 'ok') {
                    // If email is valid, move to stage 2
                    setSalt(response.data.data.salt);
                    setUser(response.data.data.userName);
                    setEmailError(null); // Reset email validation error message
                    setStage(2);
                } else {
                    setEmailError(response.data.error); // Set email validation error message
                }
            } catch (error) {
                console.error('Error checking email:', error);
            }
        } else if (stage === 2) {
            try {
                let pwd = sha256(salt + password);
                // let response = await axios.post(`${serverUrl}/login/checkPassword`, { email , password: pwd });
                let response = { status: 200, data: { status: 'ok', data: { salt: '012', userName: 'Alex' } } };
                console.log(response);
                if (response.status === 200 && response.data.status === 'ok') {
                    setPasswordError(null);
                    handleLogin();
                    // onLoginSuccess();
                } else {
                    setPasswordError(response.data.error);
                }
            } catch (error) {
                console.error('Error checking password:', error);
            }
        }
    };

    return (
        <div className="login-page-container">
            <h1>Login</h1>
            {stage === 1 ? ( // Render email input in stage 1
                <form>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </label>
                    {emailError && (
                        <div className="error-msg" style={{ color: 'red' }}>
                            {emailError
                        }
                        </div>
                    )}
                    <button type="button" onClick={handleNext}>
                        Next
                    </button>
                </form>
            ) : stage === 2 ? ( // Render password input in stage 2
                <form>
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    {passwordError && (
                        <div className="error-msg" style={{ color: 'red' }}>
                            {passwordError}
                        </div>
                    )}
                    <button type="button" onClick={handleNext}>
                        Login
                    </button>
                </form>
            ) : null}
        </div>
    );
}

export default LoginPage;