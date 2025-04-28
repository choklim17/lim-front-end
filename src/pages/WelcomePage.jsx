import { useParams } from "react-router-dom";

function WelcomePage() {
    const { email } = useParams();

    return (
        <h1>Welcome {email}!</h1>
    );
}

export default WelcomePage;