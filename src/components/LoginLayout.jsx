import { Outlet } from "react-router-dom";
import '../styles/LoginLayout.css'

function LoginLayout() {
    return (
        <div className="login-layout">
            <Outlet />
        </div>
    );
}

export default LoginLayout;