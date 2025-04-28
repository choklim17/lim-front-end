import homeImg from "../assets/images/home_img.png";
import Button from "../components/button";
import "../styles/HomePage.css"

function HomePage() {
    return (
        <section className="home-section">
            <div>
                <h1>Welcome to <span className="higlight">React!</span></h1>
                <p><strong className="higlight">Component-Based Architecture:</strong> React is built around the concept of components. A component is a self-contained unit that can manage its own state and render its own UI.</p>
                <p className="with-margin-bottom"><strong className="higlight">Virtual DOM for Efficient Updates:</strong> React uses a Virtual DOM (a lightweight copy of the actual DOM) to improve performance.</p>
                <Button>Get Started</Button>
            </div>

            <div className="image-container">
                <img src={homeImg} alt="Sample React Code" />
            </div>
        </section>
    );
}

export default HomePage;