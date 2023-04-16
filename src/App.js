import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './login';
import AuthenticatedPage from './authenticatedPage';
import { AuthProvider } from './auth';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        setIsLoggedIn(isLoggedIn === 'true');
    }, []); 

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
    };

    return (
    <AuthProvider>
        <Router>
        <div>
            <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
            <Route
                path="/authenticatedPage"
                element={isLoggedIn ? <AuthenticatedPage /> : <Navigate to="/login" />}
            />
            </Routes>
        </div>
        </Router>
    </AuthProvider>
    );
};

export default App;
