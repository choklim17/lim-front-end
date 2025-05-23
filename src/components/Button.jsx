import '../styles/Button.css';

function Button({ children, onClick }) {
    return (
        <button className="custom-button" onClick={onClick}>{children}</button>
    );
}

export default Button;