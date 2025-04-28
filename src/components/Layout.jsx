import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import "../styles/Layout.css";
import Footer from "./Footer";

function Layout() {
    return (
        <>
            <Navbar />
            <div className="layout-container">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;