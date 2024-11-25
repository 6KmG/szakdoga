import React from 'react'
import AuthService from '../../Services/AuthService';

const RegisterButton: React.FC = () => {
    const navigateRegister = () => {
        window.location.assign("/register");
    }
    return (
        <button 
            onClick={navigateRegister} 
            className="bg-green-700 text-white px-4 py-2 hover:bg-green-800"
        >Register</button>
    );
};
export default RegisterButton;