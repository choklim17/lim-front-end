import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import Button from "./button";
import "../styles/Navbar.css"

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
            </ul>
            <Button><Link to='/login'>Login</Link></Button>
        </nav>
    );
}

export default Navbar;