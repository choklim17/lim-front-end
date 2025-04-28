import { Link } from "react-router-dom";
import '../styles/NotFoundPage.css'

function NotFoundPage() {
    return (
        <>
            <h1 className="not-found-header">404 - Page Not Found</h1>
            <p className="not-found-p">The link you followed to get here must be broken...</p>
            <Link to={"/"} className="not-found-a">Return to home</Link>
        </>
    );
}

export default NotFoundPage;