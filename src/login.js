import React, { useState, useEffect } from 'react';
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
    const [hashedPassword, setHashedPassword] = useState(''); // State to store hashed password
    const [salt, setSalt] = useState('');

    useEffect(() => {
        if (salt !== '') {
          // Do something with the salt value, such as generating a hashed password
          handleGenerateHash(salt);
        }
    }, [salt]);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleGenerateHash = (salt) => {
        const hashed = sha256(salt + password);
        setHashedPassword(hashed);
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
                // Replace the endpoint with your server's API endpoint for email validation
                let response = await axios.post(`${serverUrl}/login/checkEmail`, { email });
                if (response.status === 200 && response.data.status === 'ok') {
                    // If email is valid, move to stage 2
                    setSalt(response.data.salt);
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
                // Replace the endpoint with your server's API endpoint for password validation
                let pwd = sha256(salt + password);
                let response = await axios.post(`${serverUrl}/login/checkPassword`, { password: pwd });
                console.log(response);
                if (response.status === 200 && response.data.status === 'ok') {
                    setPasswordError(null);
                    onLoginSuccess();
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