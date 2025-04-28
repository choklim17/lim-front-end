import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";

function SignupPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup submitted: ', {firstName, lastName,email, password, confirmPassword});
    }

    return (
        <div className="login-container">
            <h2>Register</h2>

            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">Firstname:</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter your firstname"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Lastname:</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter your lastname"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required    
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input 
                        type="password" 
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required    
                    />
                </div>

                <div className="form-button">
                    <Button>Sign Up</Button>
                </div>
            </form>
        </div>
    );
}

export default SignupPage;