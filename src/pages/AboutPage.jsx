import metaFacebook from "../assets/images/meta-facebook.jpg";
import "../styles/AboutPage.css"

function AboutPage() {
    return (
        <section className="about-section">
            <div className="about-image-container">
                <img src={metaFacebook} alt="Sample React Code" />
            </div>

            <div className="about-text">
                <p>React (also known as <strong>React.js or ReactJS</strong>) is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.</p>
                <p>React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js and Remix. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only re-renders those parts of the page that have changed, avoiding unnecessary re-rendering of unchanged DOM elements.</p>
            </div>
        </section>
    );
}

export default AboutPage;