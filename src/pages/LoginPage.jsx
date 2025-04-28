import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted: ', {email, password});
        navigate(`/user/${email}`);
    }

    return (
        <div className="login-container">
            <h2>Welcome</h2>

            <form className="form" onSubmit={handleSubmit}>
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
                
                <p><Link>Forgot Password?</Link></p>

                <div className="form-button">
                    <Button>Login</Button>
                </div>
            </form>

            <p className="signup-link">Don't have an account yet? <Link to='/user/signup'>Sign up</Link></p>
        </div>
    );
}

export default LoginPage;